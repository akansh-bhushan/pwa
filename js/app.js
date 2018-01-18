var app=angular.module('start',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider)
{   'use restrict';
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'home.html'
        })
        .state('about',{
            url:'/about',
            templateUrl:'about.html'
        })
}]);


