'use strict';

angular.module('liveBrokerHttpClientApp')
.directive('urlBar', function () {
    return {
      templateUrl: 'views/url-bar.html',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {


      }
    };
  });
