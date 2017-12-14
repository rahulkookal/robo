App.controller('simulateBoardCtrl', ['$scope','boardSrv', 'motionSrv',
    function ($scope, boardSrv, motionSrv) {
        //This is a common handler
        BaseCtrl.call(this, $scope);

        var init = function(){
            $scope.walkabilityMatrix = boardSrv.boardMetrix;
            var easystar = new EasyStar.js();
            easystar.setGrid($scope.walkabilityMatrix);
            easystar.setAcceptableTiles([0,15,2,13, 7]);
            //easystar.setAdditionalPointCost(3, 0, 25);
            easystar.findPath(0, 0, 0, 6, function( path ) {
                if (path === null) {
                    alert("Path was not found.");
                } else {
                    console.log(path);
                }
            });
            easystar.calculate();
            poll();

        };

        var poll = function(seq_no){
            var paths = boardSrv.getPaths();
            var path = paths.pop();

            // !!seq_no? path.params.sequence_no = 1 :
            //     path.params.sequence_no = seq_no;

            if(!!path){
                // switch(path.type) {
                //     case "FORWARD":
                //         move(path);
                //         break;
                //     case "BACKWARD":
                //         move(path);
                //         break;
                //     default:
                //         console.log("default")
                // }
                move(path);
            } else {
                console.log("Queue Empty")
            }
        };
        var move = function(path){
                    var successCallBack = function(data){
                        console.log(data);
                        poll();
                    }
                    var failedCallBack = function(err){
                        console.log(err);
                    }
                    var options = {
                        successCallBack: successCallBack,
                        failureCallBack: failedCallBack,
                        params: path.params
                    }
                    $scope.callAPI(path.action, options);
            };
        init();

        $scope.pollNew = function(){
            poll();
        }
    }]);


