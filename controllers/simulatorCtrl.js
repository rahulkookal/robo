App.controller('exRootCtrl',['$scope','motionSrv', '$state',
    function ($scope, motionSrv, $state) {
        BaseCtrl.call(this, $scope);
        var init = function(){
            // Example of api call
            fetchData();
        };
        $scope.goToSimulation = function(){
            console.log("sdfsd")
            $state.go('simulateBoard');
        };

        // Function to handle api calls.
        var fetchData = function() {
            var successCallBack = function(data){
                console.log(data);
            }
            var failedCallBack = function(err){
                console.log(err);
            }
            var options = {
                successCallBack: successCallBack,
                failureCallBack: failedCallBack
            }
            //$scope.callAPI(motionSrv.getX, options);
        };

        init();
    }]);