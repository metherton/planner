'use strict';

angular.module('starter.services', ['ngResource'])
  .constant("baseURL","http://localhost:3000/")
  .factory('userFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    return $resource(baseURL + "users/:id", null, {
      'update': {
        method: 'PUT'
      }
    });

  }]);
