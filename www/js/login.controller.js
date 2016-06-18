(function() {

  'use strict';

  angular.module('starter.controllers')

  .controller('LoginCtrl', LoginCtrl);


  //LoginCtrl.$inject = ['$scope', '$ionicModal', '$timeout', 'users', 'AuthFactory', '$localStorage', '$state', 'sprintFactory', 'sprints', 'storyFactory', 'stories', '$location', '$window'];
  LoginCtrl.$inject = ['$state', 'AuthFactory'];

  //function LoginCtrl($scope, $ionicModal, $timeout, users, AuthFactory, localStorage, $state, sprintFactory, sprints, storyFactory, stories, $location, $window) {
    function LoginCtrl($state, AuthFactory) {


    console.log('this is the login controller');

    var vm = this;

    // Form data for the login modal
    vm.loginData = {};
    ////$scope.reservation = {};
    ////$scope.registration = {};
    //vm.loggedIn = false;
    //vm.sprint = {};
    //
    //
    ////$scope.story = {};
    //vm.users = users;
    //vm.sprints = sprints;
    //vm.stories = stories;
    //
    //if (AuthFactory.isAuthenticated()) {
    //  vm.loggedIn = true;
    //  vm.username = AuthFactory.getUsername();
    //}

    // Create the login modal that we will use later
    //$ionicModal.fromTemplateUrl('templates/login.html', {
    //  scope: $scope
    //}).then(function (modal) {
    //  vm.modal = modal;
    //});

    // Triggered in the login modal to close it
 //   vm.closeLogin = function () {
 //     //vm.modal.hide();
 ////     $window.location.href = 'http://localhost:8100/#/app/currentSprint';
 //     $window.location.href = '#/app/currentSprint';
 //     $window.location.reload();
 //   };

    // Open the login modal
    //vm.login = function () {
    //  vm.modal.show();
    //};

    // Perform the login action when the user submits the login form
    vm.doLogin = function () {

  //    localStorage.storeObject('userinfo', vm.loginData);

      AuthFactory.login(vm.loginData).$promise.then(function() {
        $state.go('app.currentSprint');

      }, function() {

      });

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system

      //$timeout(function () {
      //  $state.go('app.currentSprint', {}, {reload: true});
      //  //$state.reload();
      //  $window.location.reload(true);
      //}, 1000);


      //$timeout(function () {
      //  vm.closeLogin();
      //}, 1000);
    };

    //vm.logOut = function () {
    //  AuthFactory.logout();
    //  vm.loggedIn = false;
    //  vm.username = '';
    //};
    //
    //$ionicModal.fromTemplateUrl('templates/createSprint.html', {
    //  scope: $scope
    //}).then(function (modal) {
    //  vm.createSprintForm = modal;
    //});
    //
    //// Triggered in the reserve modal to close it
    //vm.closeCreateSprint = function () {
    //  vm.createSprintForm.hide();
    //};
    //
    //// Open the reserve modal
    //vm.createSprint = function () {
    //  vm.createSprintForm.show();
    //};
    //
    //// Perform the reserve action when the user submits the reserve form
    //vm.doCreateSprint = function () {
    //  console.log('Doing create sprint', vm.sprint);
    //
    //  sprintFactory.save(vm.sprint).$promise.then(function (response) {
    //    console.log(response.data);
    //  });
    //
    //
    //  // Simulate a reservation delay. Remove this and replace with your reservation
    //  // code if using a server system
    //  $timeout(function () {
    //    vm.closeCreateSprint();
    //  }, 1000);
    //};
    //
    //$ionicModal.fromTemplateUrl('templates/createStory.html', {
    //  scope: $scope
    //}).then(function (modal) {
    //  vm.createStoryForm = modal;
    //});
    ////
    ////// Triggered in the reserve modal to close it
    //vm.closeCreateStory = function () {
    //  vm.createStoryForm.hide();
    //};
    ////
    ////// Open the reserve modal
    //vm.createStory = function () {
    //  vm.createStoryForm.show();
    //};
    ////
    //vm.doCreateStory = function () {
    //  console.log('Doing create story', vm.story);
    //
    //  storyFactory.save(vm.story);
    //
    //
    //  // Simulate a reservation delay. Remove this and replace with your reservation
    //  // code if using a server system
    //  $timeout(function () {
    //    vm.closeCreateStory();
    //  }, 1000);
    //}


  }

})();

