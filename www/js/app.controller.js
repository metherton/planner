angular.module('starter.controllers', [])

.controller('AppCtrl', AppCtrl);

AppCtrl.$inject = ['$scope', '$ionicModal', '$timeout', 'users', 'AuthFactory', '$localStorage', '$state', 'sprintFactory', 'sprints'];

function AppCtrl($scope, $ionicModal, $timeout, users, AuthFactory, $localStorage, $state, sprintFactory, sprints) {

  // Form data for the login modal
  $scope.loginData = {};
  //$scope.reservation = {};
  //$scope.registration = {};
  $scope.loggedIn = false;
  $scope.sprint = {};


  //$scope.story = {};
  $scope.users = users;
  $scope.sprints = sprints;

  if (AuthFactory.isAuthenticated()) {
    $scope.loggedIn = true;
    $scope.username = AuthFactory.getUsername();
  }

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function () {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function () {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function () {

    $localStorage.storeObject('userinfo', $scope.loginData);

    AuthFactory.login($scope.loginData);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system

    //$state.go($state.current, {}, {reload: true});
    $state.reload();

    $timeout(function () {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.logOut = function () {
    AuthFactory.logout();
    $scope.loggedIn = false;
    $scope.username = '';
  };

  $ionicModal.fromTemplateUrl('templates/createSprint.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.createSprintForm = modal;
  });

  // Triggered in the reserve modal to close it
  $scope.closeCreateSprint = function () {
    $scope.createSprintForm.hide();
  };

  // Open the reserve modal
  $scope.createSprint = function () {
    $scope.createSprintForm.show();
  };

  // Perform the reserve action when the user submits the reserve form
  $scope.doCreateSprint = function () {
    console.log('Doing create sprint', $scope.sprint);

    sprintFactory.save($scope.sprint).$promise.then(function (response) {
      console.log(response.data);
    });


    // Simulate a reservation delay. Remove this and replace with your reservation
    // code if using a server system
    $timeout(function () {
      $scope.closeCreateSprint();
    }, 1000);
  };
  //
  $ionicModal.fromTemplateUrl('templates/createStory.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.createStoryForm = modal;
  });
  //
  //// Triggered in the reserve modal to close it
  $scope.closeCreateStory = function () {
    $scope.createStoryForm.hide();
  };
  //
  //// Open the reserve modal
  $scope.createStory = function () {
    $scope.createStoryForm.show();
  };
  //
  $scope.doCreateStory = function () {
    console.log('Doing create story', $scope.story);

    storyFactory.save($scope.story);


    // Simulate a reservation delay. Remove this and replace with your reservation
    // code if using a server system
    $timeout(function () {
      $scope.closeCreateStory();
    }, 1000);
  }
}
