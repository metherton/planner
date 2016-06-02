(function() {

  'use strict';

  angular.module('starter.controllers')

  .controller('UserCtrl', UserCtrl);

  UserCtrl.$inject = ['users'];

  function UserCtrl(users) {

    var vm = this;
    console.log('in UserCtrl');
    vm.users = users;
    console.log(users);

  }

})();


