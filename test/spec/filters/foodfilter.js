'use strict';

describe('Filter: foodFilter', function () {

  // load the filter's module
  beforeEach(module('firebasepracticeApp'));

  // initialize a new instance of the filter before each test
  var foodFilter;
  beforeEach(inject(function ($filter) {
    foodFilter = $filter('foodFilter');
  }));

  it('should return the input prefixed with "foodFilter filter:"', function () {
    var text = 'angularjs';
    expect(foodFilter(text)).toBe('foodFilter filter: ' + text);
  });

});
