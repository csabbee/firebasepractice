'use strict';

angular.module('firebasepracticeApp')
  .directive('navbar', function () {
    return {
      templateUrl: "views/templates/navbar.html", 
      restrict: 'E'
    };
  });
