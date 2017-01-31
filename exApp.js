
var exApp = angular.module('exApp', ['ngRoute', 'ui.bootstrap', 'ui.router', 'AcademicsModule']);
//.config(['$routeProvider', function ($routeProvider) {
exApp.config(['$locationProvider','$stateProvider', '$urlRouterProvider', function ( $locationProvider,$stateProvider, $urlRouterProvider) {    
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
		    .state('dashborad', {
	        	url: '/dashborad',
			    templateUrl:'../partials/home.html',
			    controller: 'exRootCtrl'
		    });		
}]);

exApp.controller('topController', ['$state', '$scope', function($state, $scope) {
    $state.go('dashborad');
}]);

