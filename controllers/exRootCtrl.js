exApp.controller('exRootCtrl',['$scope','exMenuSrv', 
	function ($scope, exMenuSrv) {
	BaseCtrl.call(this, $scope);	
    
    var init = function(){    	
    	$scope.logger("initiated Root controller")
    	$scope.message = "Add Template here";
    	$scope.menus = exMenuSrv.getMenu();
    };
    init();
}]);
