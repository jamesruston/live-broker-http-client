'use strict';

angular.module('liveBrokerHttpClientApp')
  .directive('requestBuilder', function () {
    return {
      templateUrl: 'views/request-builder.html',
      restrict: 'E',
      scope: {request:"=", services:"=", foo:"="},
      replace: false,
      link: function postLink(scope, element, attrs) {

        scope.$watch('service', function(newValue, oldValue) {
          console.log(angular);
          angular.forEach(scope.services, function(service) {
            if(service == newValue) {
              scope.types = service.types;
            }
          });
        });




      }
    };
  });
