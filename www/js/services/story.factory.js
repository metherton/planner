'use strict';

angular.module('starter.services')
  .factory('storyFactory', storyFactory);

storyFactory.$inject = ['$resource', 'baseURL'];

function storyFactory($resource,baseURL) {

  return $resource(baseURL +"stories/:id", null, {
    'update': {
      method: 'PUT'
    }
  });
}
