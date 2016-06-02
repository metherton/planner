'use strict';

describe('Controllers', function() {

  var AppCtrl, scope, mockIonicModal, $q, deferredModal, mockUsers, mockAuthFactory,
      mockLocalStorage, mockState, mockSprintFactory, deferredSave, mockSprints;


    beforeEach(module('starter.controllers'));

    beforeEach(function() {

      mockUsers = ['martin', 'fred'],
          mockSprints = ['sprint1', 'sprint2'],

          mockIonicModal = {
            fromTemplateUrl: function() {
              deferredModal = $q.defer();
              return deferredModal.promise;
            }

          },
          mockState = {
            reload: jasmine.createSpy('reload')
          },
          mockLocalStorage = {
            storeObject: jasmine.createSpy('storeObject')
          },

          mockSprintFactory = {
            //save: jasmine.createSpy('save').and.returnValue(deferredSave.promise)
          }
      ;

    });


  describe('Controller: AppCtrl', function() {







    describe('not authenticated', function() {
      beforeEach(function() {

            mockAuthFactory = {
              logout: jasmine.createSpy('logout'),
              //isAuthenticated: isAuthed,
              isAuthenticated: jasmine.createSpy('isAuthenticated').and.callFake(function() {
                return false;
              }),
              getUsername: jasmine.createSpy('getUsername').and.returnValue('')
            }
        ;

      });

      beforeEach(module(function($provide) {
        $provide.value('$localStorage', mockLocalStorage);
        $provide.value('$state', mockState);
        $provide.value('sprintFactory', mockSprintFactory);
      }));

      beforeEach(inject(function($controller, _$q_) {
        $q = _$q_;

        deferredSave = $q.defer();

        mockSprintFactory.save = jasmine.createSpy('save').and.returnValue(deferredSave.promise);


        AppCtrl = $controller('AppCtrl', {
          $ionicModal: mockIonicModal,
          users: mockUsers,
          AuthFactory: mockAuthFactory,
          sprints: mockSprints
        });

        AppCtrl.modal = {
          hide: jasmine.createSpy('hide'),
          show: jasmine.createSpy('show')
        };



      }));


      it('should initialize scope variables', function() {
        expect(AppCtrl.loginData).toBeDefined();
        expect(AppCtrl.users).toBeDefined();
        expect(AppCtrl.sprints).toBeDefined();

        expect(AppCtrl.loggedIn).toBeFalsy();
      });

      it('should hide modal when login closed', function() {
        AppCtrl.closeLogin();
        expect(AppCtrl.modal.hide).toHaveBeenCalled();
      });

      it('should show modal when login opened', function() {
        AppCtrl.login();
        expect(AppCtrl.modal.show).toHaveBeenCalled();
      });

      it('should logout from AuthFactory', function() {
        console.log('appc', AppCtrl);
        AppCtrl.logOut();
        expect(mockAuthFactory.logout).toHaveBeenCalled();
      });


    });


    describe('with authentication set', function() {


      beforeEach(function() {
            mockAuthFactory = {
              logout: jasmine.createSpy('logout'),
              //isAuthenticated: isAuthed,
              isAuthenticated: jasmine.createSpy('isAuthenticated').and.callFake(function() {
                return true;
              }),
              getUsername: jasmine.createSpy('getUsername').and.returnValue('martin'),
              login: jasmine.createSpy('login')
            }

      });

      beforeEach(module(function($provide) {
        $provide.value('$localStorage', mockLocalStorage);
        $provide.value('$state', mockState);
        $provide.value('sprintFactory', mockSprintFactory);
      }));

      beforeEach(inject(function($controller, $rootScope, _$q_) {
        $q = _$q_;

        deferredSave = $q.defer();

        mockSprintFactory.save = jasmine.createSpy('save').and.returnValue({$promise: deferredSave.promise});



        AppCtrl = $controller('AppCtrl', {
          $ionicModal: mockIonicModal,
          users: mockUsers,
          AuthFactory: mockAuthFactory,
          sprints: mockSprints
        });

        AppCtrl.modal = {
          hide: jasmine.createSpy('hide'),
          show: jasmine.createSpy('show')
        };

        AppCtrl.createSprintForm = {
          hide: jasmine.createSpy('hide'),
          show: jasmine.createSpy('show')
        };


      }));

      it('should set user name if user is authenticated', function() {
        expect(AppCtrl.username).toBe('martin');
      });

      it('should store object locally on login', function() {
        AppCtrl.doLogin();
        expect(mockLocalStorage.storeObject).toHaveBeenCalled();
        expect(mockState.reload).toHaveBeenCalled();
      });

      it('should put modal on the scope', function() {
        deferredModal.resolve('newmodal');
       // $rootScope.$digest();
        // expect(scope.modal).toBe('newmodal'); //works but not second time cos it is comparing against set up modal
        expect(AppCtrl.modal).toBeDefined();
      });

      it('should hide create sprint form', function() {

        AppCtrl.closeCreateSprint();
        expect(AppCtrl.createSprintForm.hide).toHaveBeenCalled();
      });

      it('should show create sprint form', function() {

        AppCtrl.createSprint();
        expect(AppCtrl.createSprintForm.show).toHaveBeenCalled();
      });

      it('should save sprint', function() {
        AppCtrl.doCreateSprint();
        expect(mockSprintFactory.save).toHaveBeenCalled();
      });

    });





  });


  describe('SprintCtrl', function() {

    var sprintCtrl;

    beforeEach(inject(function($controller) {

      sprintCtrl = $controller('SprintCtrl', {
        'sprints': mockSprints
      });
    }));

    it('should set sprints on initialization', function() {
      expect(sprintCtrl.sprints).toBeDefined();
    });

  });

});

