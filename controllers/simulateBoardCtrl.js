App.controller('simulateBoardCtrl', ['$scope','boardSrv', 'motionSrv',
    function ($scope, boardSrv, motionSrv) {
        //This is a common handler
        BaseCtrl.call(this, $scope);

        $scope.pollNew = function(){
            boardSrv.updatePaths();
            poll();
        };

        $scope.drawPath = function(x, y){
            var tr = '';
            if(!!$scope.activePath){
                $scope.activePath.forEach(function (path) {
                    if(path.x == x && path.y == y){
                        tr = 'path-red'
                    }
                })
            }
            return tr;
        };
        var init = function(){
            $scope.walkabilityMatrix = boardSrv.boardMetrix;
            var easystar = new EasyStar.js();
            easystar.setGrid($scope.walkabilityMatrix);
            easystar.setAcceptableTiles([0,15,2,13, 7]);
            //easystar.setAdditionalPointCost(3, 0, 25);
            easystar.findPath(0, 0, 26, 17, function( path ) {
                if (path === null) {
                    alert("Path was not found.");
                } else {
                    $scope.activePath = path;
                }
            });
            easystar.calculate();
            boardSrv.updatePaths();
            poll();

        };

        var poll = function(seq_no){
            var paths = boardSrv.getPaths();
            var path = paths.pop();
            if(!!path){
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
    }]);


