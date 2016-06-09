(function() {

  'use strict';

  angular.module('starter.services')
    .factory('sprintFactory', sprintFactory);

  sprintFactory.$inject = ['$resource', 'baseURL'];

  function sprintFactory($resource,baseURL) {

    return $resource(baseURL +"sprints/:id", { id: '@_id' }, {
      'update': {
        method: 'PUT'
      }
    });
  }
})();

