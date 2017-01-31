exApp.controller('exRootCtrl',['$scope','exMenuSrv', 
	function ($scope, exMenuSrv) {
	BaseCtrl.call(this, $scope);
	
    $scope.message = "Main Content";
    $scope.menus = exMenuSrv.getMenu();
}]);
