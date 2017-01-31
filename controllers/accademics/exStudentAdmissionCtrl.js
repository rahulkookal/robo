exApp.controller('exStudentAdmissionCtrl', ['$scope',
function ($scope) {
	//This is a common handler
	BaseCtrl.call(this, $scope);

	var init = function(){
		$scope.logger("Initiating exStudentAdmissionCtrl");
		// All Initail task should be done here.
	};

	init();
}]);