exApp.controller('exTemplateCtrl', ['$scope',
function ($scope) {
	//This is a common handler
	BaseCtrl.call(this, $scope);

	var init = function(){
		$scope.logger("Initiating exTemplateCtrl");
		// All Initail task should be done here.
	};

	init();
}]);