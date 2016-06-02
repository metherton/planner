(function() {

  'use strict';

  angular.module('starter.controllers')


  .controller('PlaylistCtrl', PlaylistCtrl);

  function PlaylistCtrl($stateParams) {
    console.log('in PlaylistCtrl');
  }

})();

