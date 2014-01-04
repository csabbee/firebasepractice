'use strict';

angular.module('firebasepracticeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/foodrepository', {
        templateUrl: 'views/foodrepository.html',
        controller: 'FoodrepoCtrl'
      })
      .when('/addfood', {
        templateUrl: 'views/addfood.html',
        controller: 'FoodrepoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
