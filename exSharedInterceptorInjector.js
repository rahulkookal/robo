exApp.config([
	'$httpProvider',
	'ngDialogProvider',
	'$provide',
	function($httpProvider, ngDialogProvider, $provide) {
		// adding shared http interceptor, which is handling our webservice errors & in future our authentication if needed
		$httpProvider.interceptors.push('sharedHttpInterceptor');
	       
	}
]);


// Http interceptor

angular.module('sharedHttpInterceptor', []).factory('sharedHttpInterceptor', [
  '$rootScope',
  '$q',
  '$window', function ($rootScope, $q, $window) {

  return {
    request: function (config) {
      return config;
    },
    response: function (response) {       
        return response || $q.when(response);
    },
    responseError: function(rejection) {
      if (rejection.status === 401) { // 401- Unauthorized
        // so lets redirect to login page
        $window.location.href = '/logout' ;
      }
      if (rejection.status === 430) {
         
      }
      if (rejection.status === 520 ) {

      }
      if (rejection.status === 503) {
        $window.location.href = '/500';
      }
      if (rejection.status === 502) {
        return;
      }
      if (rejection.status === 504) {
        return;
      }
      /*
      we can't handle 500, 501 since we need to show custom error messages on that scope.
      **/
      return $q.reject(rejection);
    }
  };
  }]);