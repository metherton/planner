(function() {

  'use strict';

  angular.module('starter.controllers')


  .controller('PlaylistCtrl', PlaylistCtrl);

  function PlaylistCtrl($scope, $stateParams) {
    console.log('in PlaylistCtrl');
  }

})();

