'use strict';

describe('Directive: requestBuilder', function () {

  // load the directive's module
  beforeEach(module('liveBrokerHttpClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<request-builder></request-builder>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the requestBuilder directive');
  }));
});
