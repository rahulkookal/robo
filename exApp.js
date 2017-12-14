
var App = angular.module('App', ['ngRoute', 'ui.router', 'SampleModule']);
//.config(['$routeProvider', function ($routeProvider) {
App.config(['$locationProvider','$stateProvider', '$urlRouterProvider', function ( $locationProvider,$stateProvider, $urlRouterProvider) {
	$locationProvider.hashPrefix('');
	    $urlRouterProvider.otherwise('/');
	    /*
		 * state added to show single url throughout the app
		 */
		$stateProvider.state('top', {
            url: '/',
            controller: 'topController'
    	});
	    $stateProvider
		    .state('simulation', {
	        	url: '/simulation',
			    templateUrl:'partials/simulation.html',
			    controller: 'exRootCtrl'
		    });		
}]);

App.controller('topController', ['$state', '$scope', function($state, $scope) {
    $state.go('simulation');
}]);

App.run(['$rootScope',
    function($rootScope){
        //TODO : -
        console.log("Runner Function");
    }]);
angular.module('SampleModule', [])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider.state('simulateBoard', {
            url: '/simulateBoard',
            templateUrl: 'partials/actions/simulateBoard.html',
            controller: 'simulateBoardCtrl'
        });
    });

//mail@rahul.today
function BaseCtrl(a){
    a.runDigestCycle=function(){
        a.$$phase||a.$digest()
    },
        a.callAPI=function(b,c){
            var c=c?c:{},
                d=c.params?c.params:null,
                e=c.successCallBack?c.successCallBack:c.onSuccess?c.onSuccess:a.fetchedCompleted,
                f=c.failureCallBack?c.failureCallBack:a.fetchedFailed,
                g=c.successCallBackParameters?c.successCallBackParameters:null,
                h=c.failureCallBackParameters?c.failureCallBackParameters:null;
            return b(d).then(function(a){
                e&&(g?e(a,g):e(a))},function(a){f&&(h?f(a,h):f(a))
            })
        }
}


