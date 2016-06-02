(function() {
  'use strict';

  angular.module('starter.controllers')


  .controller('PlaylistsCtrl', PlaylistsCtrl);

  function PlaylistsCtrl() {
    console.log('in PlaylistsCtrl');

    var vm = this;

    vm.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  }
})();


