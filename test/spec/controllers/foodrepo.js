'use strict';

describe('Controller: FoodrepoCtrl', function () {

  // load the controller's module
  beforeEach(module('firebasepracticeApp'));

  var FoodrepoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoodrepoCtrl = $controller('FoodrepoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
