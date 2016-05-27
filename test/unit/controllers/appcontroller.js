'use strict';

describe('Controller: AppCtrl', function() {

    beforeEach(module('starter.controllers'));


    var AppCtrl, scope, mockIonicModal, $q, deferredModal, mockUsers, mockAuthFactory;

    describe('not authenticated', function() {
      beforeEach(function() {
        mockUsers = ['martin', 'fred'],
          mockIonicModal = {
            fromTemplateUrl: function() {
              deferredModal = $q.defer();
              return deferredModal.promise;
            }

          },
          mockAuthFactory = {
            logout: jasmine.createSpy('logout'),
            //isAuthenticated: isAuthed,
            isAuthenticated: jasmine.createSpy('isAuthenticated').and.callFake(function() {
              return false;
            }),
            getUsername: jasmine.createSpy('getUsername').and.returnValue('')
          };
      });

      beforeEach(inject(function($controller, $rootScope, _$q_) {
        $q = _$q_;

        scope = $rootScope.$new();

        scope.modal = {
          hide: jasmine.createSpy('hide'),
          show: jasmine.createSpy('show')
        };

        console.log('auth passwords');

        //isAuthed(false);

        console.log('auth later  passwords');

        AppCtrl = $controller('AppCtrl', {
          $scope: scope,
          $ionicModal: mockIonicModal,
          users: mockUsers,
          AuthFactory: mockAuthFactory
        });


      }));

      it('should initialize scope variables', function() {
        console.log(mockAuthFactory.isAuthenticated(  ))
        expect(scope.loginData).toBeDefined();
        expect(scope.users).toBeDefined();
        expect(scope.loggedIn).toBeFalsy();
      });

      it('should hide modal when login closed', function() {
        scope.closeLogin();
        expect(scope.modal.hide).toHaveBeenCalled();
      });

      it('should show modal when login opened', function() {
        scope.login();
        expect(scope.modal.show).toHaveBeenCalled();
      });

      it('should logout from AuthFactory', function() {
        scope.logOut();
        expect(mockAuthFactory.logout).toHaveBeenCalled();
      });


    });


  describe('with authentication set', function() {

    beforeEach(function() {
      mockUsers = ['martin', 'fred'],
        mockIonicModal = {
          fromTemplateUrl: function() {
            deferredModal = $q.defer();
            return deferredModal.promise;
          }

        },
        mockAuthFactory = {
          logout: jasmine.createSpy('logout'),
          //isAuthenticated: isAuthed,
          isAuthenticated: jasmine.createSpy('isAuthenticated').and.callFake(function() {
            return true;
          }),
          getUsername: jasmine.createSpy('getUsername').and.returnValue('martin')
        };
    });

    beforeEach(inject(function($controller, $rootScope, _$q_) {
      $q = _$q_;

      scope = $rootScope.$new();

      scope.modal = {
        hide: jasmine.createSpy('hide'),
        show: jasmine.createSpy('show')
      };

      console.log('auth passwords');

      //isAuthed(false);

      console.log('auth later  passwords');

      AppCtrl = $controller('AppCtrl', {
        $scope: scope,
        $ionicModal: mockIonicModal,
        users: mockUsers,
        AuthFactory: mockAuthFactory
      });


    }));

    it('should set user name if user is authenticated', function() {
      expect(scope.username).toBe('martin');
    });



  });
  

});
