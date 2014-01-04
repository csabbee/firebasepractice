'use strict';

angular.module('firebasepracticeApp')
  .directive('itemhover', function () {
    return function(scope, element) {
      element.bind('mouseenter', function(){
        element.addClass('hover');
      }).bind('mouseleave', function(){
          element.removeClass('hover');
        });
    };
  });
