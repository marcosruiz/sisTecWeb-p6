'use strict';
var app = angular.module('memoApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : '/views/login.html',
    controller: 'loginCtrl'
  })
  .when('/welcome', {
    templateUrl : '/views/welcome.html',
    controller: 'welcomeCtrl'
  })
  .when('/memo/:id', {
    templateUrl : '/views/memo.html',
    çcontroller: 'memoCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
