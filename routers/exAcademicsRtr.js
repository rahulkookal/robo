angular.module('AcademicsModule', [])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider.state('academics', {
            url: '/academics',
            templateUrl: '../partials/accademics/exStudentAdmission.html',
            controller: 'exStudentAdmissionCtrl'
        });
    });