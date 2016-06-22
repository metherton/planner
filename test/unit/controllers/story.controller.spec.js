'use strict';

describe('Controllers', function() {

    var AppCtrl, scope, mockIonicModal, $q, deferredModal, mockUsers, mockAuthFactory,
        mockLocalStorage, mockState, mockSprintFactory, deferredSave, mockSprints, scope, mockStoryFactory,
        mockStories, mockSprint;


    beforeEach(module('starter.controllers'));

    beforeEach(function() {

        mockUsers = ['martin', 'fred'],
            mockSprints = ['sprint1', 'sprint2'],
            mockSprint = {description: 'current sprint'};
        mockStories = ['story1', 'story2'],

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
            },
            mockStoryFactory = {
                //save: jasmine.createSpy('save').and.returnValue(deferredSave.promise)
            }
        ;

    });




    describe('StoryCtrl', function() {

        var storyCtrl;

        beforeEach(inject(function($controller) {

            storyCtrl = $controller('StoryCtrl', {
                'stories': mockStories
            });
        }));

        it('should set stories on initialization', function() {
            expect(storyCtrl.stories).toBeDefined();
        });

        it('should show update story form', function() {
            storyCtrl.updateStory(1);
            expect(storyCtrl.updateStoryForm.show).toHaveBeenCalled();
        });

        it('should update story', function() {
            storyCtrl.doUpdateStory();
            expect(mockStoryFactory.update).toHaveBeenCalled();
        });


    });

});

