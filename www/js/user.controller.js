(function() {

  'use strict';

  angular.module('starter.controllers')

  .controller('UserCtrl', UserCtrl);

  UserCtrl.$inject = ['$scope', 'users'];

  function UserCtrl($scope, users) {

    console.log('in UserCtrl');
    $scope.users = users;
    console.log(users);

  }

})();


