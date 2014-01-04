'use strict';

angular.module('firebasepracticeApp')
  .controller('FoodrepoCtrl', function ($scope, $firebase) {
    /*global Firebase*/
    var FBURL='https://csabivalyi.firebaseio.com/';
    var foods = $firebase(new Firebase(FBURL));
    $scope.foodToEdit ='';
    $scope.showEditForm ='';
    $scope.editedFood = {};
    // 3-way data binding between angular and firebase
    foods.$bind($scope,'foods').then(function(){

      $scope.selectFood = function(index){
        $scope.foodToEdit = index;
        $scope.showEditForm = 'true';
        $scope.editedFood.name = $scope.foods[index].name;
        $scope.editedFood.price = $scope.foods[index].price;
      };
      $scope.editFood = function(index, name, price){
        $scope.foods[index].name = name;
        $scope.foods[index].price = price;
        $scope.foodToEdit = '';
        $scope.showEditForm = '';
      };
    });
  });
