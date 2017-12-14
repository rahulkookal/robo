// mail@rahul.today
angular.module("App")
    .service("exBaseSrv",["$http","$q","$window","$rootScope",
        function(a,b,c,d){
            this.callWebService=function(d,e,f){
                var baseUrl = "http://10.7.120.81:80";
                var g=b.defer();"undefined"==typeof f&&(f="");
                var h={};return h.url=baseUrl+e,h.method=d,"GET"===d||"DELETE"===d?h.params=f:"POST"!==d&&"PUT"!==d||(h.data=f),a(h).then(
                    function(a){
                        "ok"===a.data.status?g.resolve(a.data.data):g.reject(a.data.errors)
                    },
                    function(a){
                        var b=a.status;
                        if(406===b)g.reject(a);
                        else if(422===b)g.reject(a);
                        else if(501===b||502===b||503===b)c.location.href="/500";
                        else if(500===b)g.reject(["Internal server error occured"]);
                        else if(401===b)c.location.href="/logout";
                        else if(b>=470&&b<=490){
                            var d={};
                            d.httpStatus=b,
                                d.errorMessage=a.data.errors,
                                g.reject(d)
                        }
                        else 404===b?console.warn("Found 404 Error : "+e):g.reject(a)
                    }),g.promise},
                this.getJSON=function(a,b){
                    return this.callWebService("GET",a,b)},
                this.putJSON=function(a,b){
                    return this.callWebService("PUT",a,b)},
                this.postJSON=function(a,b){
                    return this.callWebService("POST",a,b)},
                this.deleteJSON=function(a,b){
                    return this.callWebService("DELETE",a,b)}
        }]);