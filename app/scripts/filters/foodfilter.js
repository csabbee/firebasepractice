'use strict';

angular.module('firebasepracticeApp')
  .filter('foodFilter', function() {

  return function(input) {
    var result = [];
    angular.forEach(input, function(data, index) {
      if(!angular.isFunction(data)){
        result.push(data);
      }
    });
    return result;
  };
});
