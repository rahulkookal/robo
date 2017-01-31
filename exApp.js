
var exApp = angular.module('exApp', ['ngRoute', 'ui.bootstrap'])
//.config(['$routeProvider', function ($routeProvider) {
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
          templateUrl: '../partials/home.html',
          controller: 'exRootCtrl'
      })
      .otherwise({
          redirectTo: '/'
      });
}]);

