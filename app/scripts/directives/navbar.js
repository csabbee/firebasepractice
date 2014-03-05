'use strict';

angular.module('firebasepracticeApp')
.controller('navbarCtrl', function ($scope) {
  $scope.navlinks = [{
    link: 'foodrepository',
    name: 'Foods'
  },
  {
    link: 'addfood',
    name: 'Add food'
  }];
});

angular.module('firebasepracticeApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/partials/navbar.html',
      restrict: 'E',
      controller: 'navbarCtrl'
    };
  });
