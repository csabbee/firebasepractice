'use strict';

angular.module('firebasepracticeApp')
  .controller('FoodrepoCtrl', function ($scope, $firebase) {
    /*global Firebase*/
    var FBURL='https://csabivalyi.firebaseio.com/';
    var foods = $firebase(new Firebase(FBURL));
    $scope.foodToEdit ='';
    $scope.showEditForm ='';
    $scope.editedFood = {};
    $scope.modal = {};
    // 3-way data binding between angular and firebase
    foods.$bind($scope,'foods').then(function(){

      $scope.selectFood = function(key){
        $scope.foodToEdit = key;
        $scope.showEditForm = 'true';
        $scope.editedFood.name = $scope.foods[$scope.foods.$getIndex()[key]].name;
        $scope.editedFood.price = $scope.foods[$scope.foods.$getIndex()[key]].price;
      };
      $scope.editFood = function(key, name, price){
        $scope.foods[$scope.foods.$getIndex()[key]].name = name;
        $scope.foods[$scope.foods.$getIndex()[key]].price = price;
        $scope.foodToEdit = '';
        $scope.showEditForm = '';
      };
      $scope.addFood = function(){
        $scope.foods.$add($scope.newFood);
        $scope.newFood = {};
      };
      $scope.removeFood = function(key){
        $scope.foods.$remove($scope.foods.$getIndex()[key]);
      };
      $scope.showFood = function(key){
        $scope.modal.title = $scope.foods[$scope.foods.$getIndex()[key]].name;
        $scope.modal.content = $scope.foods[$scope.foods.$getIndex()[key]].description;
      };
    });
  });
