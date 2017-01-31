function BaseCtrl($scope) {

  $scope.runDigestCycle = function() {
    if (!$scope.$$phase) {
      $scope.$digest();
    }
  };

  $scope.logger = function(msg){
    console.log(msg);
  }

  $scope.callAPI = function(serviceApi, options) {
    var options = options ? options : {},
    params = options['params'] ? options['params'] : null,
    successCallBack = options['successCallBack'] ? options['successCallBack'] : (options['onSuccess'] ? options['onSuccess'] : $scope.fetchedCompleted),
    failureCallBack = options['failureCallBack'] ? options['failureCallBack'] : $scope.fetchedFailed,
    successCallBackParameters = options['successCallBackParameters'] ? options['successCallBackParameters'] : null,
    failureCallBackParameters = options['failureCallBackParameters'] ? options['failureCallBackParameters'] : null;

    return serviceApi(params).then(
    // success call back
			function(data) {
        if (successCallBack) {
          if (successCallBackParameters) {
            successCallBack(data, successCallBackParameters);
          } else {
            successCallBack(data);
          }
        }
			},
			// failure callback
			function(error) {
          if (failureCallBack) {
            if (failureCallBackParameters) {
              failureCallBack(error, failureCallBackParameters);
            } else {
              failureCallBack(error);
            }
          }
			}
		);
  };

}
