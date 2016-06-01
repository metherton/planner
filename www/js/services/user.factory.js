(function() {

  'use strict';

  angular.module('starter.services')
      .factory('userFactory', userFactory);

  userFactory.$inject = ['$resource', 'baseURL', '$http'];

  function userFactory($resource, baseURL, $http) {


      console.log($http.defaults.headers.common);

      return $resource(baseURL + "users/:id", null, {
          'update': {
              method: 'PUT'
          }
      });

  }

})();

