'use strict';

angular.module('firebasepracticeApp')
  .controller('FoodrepoCtrl', function ($scope, $firebase) {
    /*global Firebase*/
    var FBURL='https://csabivalyi.firebaseio.com/';
    var foods = $firebase(new Firebase(FBURL));

    // 3-way data binding between angular and firebase
    foods.$bind($scope,"foods").then(function(){

      $scope.editFood = function(index, data){
        $scope.foods[index] = data;
      };
    });
  });
