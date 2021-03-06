(function() {

  'use strict';

  // Ionic Starter App

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  // 'starter.controllers' is found in controllers.js
  angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.config'])

    .run(function($ionicPlatform, $http) {
      //.run(function($ionicPlatform, $http) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });

    })

    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

      $stateProvider
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/sidebar.html',
          controller: 'AppCtrl',
          controllerAs: 'vm',
          resolve: {
            users: ['userFactory', '$http', function (userFactory, $http) {
              return userFactory.query();
            }],
            sprints: ['sprintFactory', '$http', function (sprintFactory, $http) {
              return sprintFactory.query();
            }],
            stories: ['storyFactory', '$http', function (storyFactory, $http) {
              return storyFactory.query();
            }]
          }
        })
        //
        //.state('app.search', {
        //  url: '/search',
        //  views: {
        //    'menuContent': {
        //      templateUrl: 'templates/search.html'
        //    }
        //  }
        //})
        //
        //.state('app.browse', {
        //  url: '/browse',
        //  views: {
        //    'menuContent': {
        //      templateUrl: 'templates/browse.html'
        //    }
        //  }
        //})
        //.state('app.login', {
        //  url: '/login',
        //  views: {
        //    'menuContent': {
        //      templateUrl: 'templates/login.html',
        //      controller: 'LoginCtrl',
        //      controllerAs: 'vm'
        //      //cache: false,
        //      //resolve: {
        //      //  users:  ['userFactory', '$http', function(userFactory, $http){
        //      //    console.log($http.defaults.headers.common);
        //      //    return userFactory.query();
        //      //  }]
        //      //
        //      //}
        //    }
        //  }
        //})
          .state('login', {
            url: '/login',
            //views: {
            //  'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'vm'
                //cache: false,
                //resolve: {
                //  users:  ['userFactory', '$http', function(userFactory, $http){
                //    console.log($http.defaults.headers.common);
                //    return userFactory.query();
                //  }]
                //
                //}
              //}
            //}
          })
        .state('app.users', {
          url: '/users',
          views: {
            'menuContent': {
              templateUrl: 'templates/users.html',
              controller: 'UserCtrl',
              controllerAs: 'vm',
              cache: false,
              resolve: {
                users:  ['userFactory', '$http', function(userFactory, $http){
                  console.log($http.defaults.headers.common);
                  return userFactory.query();
                }]

              }
            }
          }
        })
        .state('app.sprints', {
          url: '/sprints',
          views: {
            'menuContent': {
              templateUrl: 'templates/sprints.html',
              controller: 'SprintCtrl',
              controllerAs: 'vm',
              resolve: {
                sprints:  ['sprintFactory', '$http', function(sprintFactory, $http){
                  console.log($http.defaults.headers.common);
                  return sprintFactory.query();
                }],
                sprint: ['sprintFactory', '$http', function(sprintFactory, $http){
                  return sprintFactory.get({id:0});
                }]

              }
            }
          }
        })
        .state('app.stories', {
          url: '/stories',
          views: {
            'menuContent': {
              templateUrl: 'templates/stories.html',
              controller: 'StoryCtrl',
              controllerAs: 'vm',
              resolve: {
                stories:  ['storyFactory', '$http', function(storyFactory, $http){
                  console.log($http.defaults.headers.common);
                  return storyFactory.query();
                }],
                users: ['userFactory', '$http', function (userFactory, $http) {
                  return userFactory.query();
                }],


              }
            }
          }
        })
        .state('app.currentSprint', {
          url: '/currentSprint',
          views: {
            'menuContent': {
              templateUrl: 'templates/currentSprint.html',
              controller: 'CurrentSprintCtrl',
              controllerAs: 'vm',
              resolve: {
                stories:  ['storyFactory', '$http', function(storyFactory, $http){
                  console.log($http.defaults.headers.common);
                  return storyFactory.query();
                }],
                sprint: ['sprintFactory', '$http', function(sprintFactory, $http){
                  return sprintFactory.get({id:0});
                }]

              }
            }
          }
        });



        //.state('app.single', {
        //  url: '/playlists/:playlistId',
        //  views: {
        //    'menuContent': {
        //      templateUrl: 'templates/playlist.html',
        //      controller: 'PlaylistCtrl',
        //      controllerAs: 'vm'
        //    }
        //  }
        //});
      // if none of the above states are matched, use this as the fallback
      //$urlRouterProvider.otherwise('/app/home');
      //$urlRouterProvider.otherwise('/app/login');
      $urlRouterProvider.otherwise('/login');

    });


})();

