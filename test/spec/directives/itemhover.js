'use strict';

describe('Directive: itemhover', function () {

  // load the directive's module
  beforeEach(module('firebasepracticeApp'));

  //var element;
  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));
/*
  it('should add a class to the element when mouse is over it', inject(function ($compile) {
    //GIVEN
    element = angular.element('<div itemhover></div>');
    element = $compile(element)(scope);
    //WHEN
    element.trigger('mouseover');
    //THEN
    expect(element).toHaveClass('hover');
  }));*/
});
