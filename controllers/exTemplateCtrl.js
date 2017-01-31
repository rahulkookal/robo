exApp.controller('exTemplateCtrl', ['$scope',
function ($scope) {
	//This is a common handler
	BaseCtrl.call(this, $scope);

	var init = sunction(){
		// All Initail task should be done here.
	};

	init();
}]);