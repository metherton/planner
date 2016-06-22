'use strict';

var LoginPage = require('./pages/login.page.js');
var CurrentSprintPage = require('./pages/currentsprint.page.js');
var UpdateStoryPage = require('./pages/updatestory.page.js');


describe('planner App E2E Testing', function() {

  var loginPage;
  var currentSprintPage;
  var updateStoryPage;

  describe('login page', function() {
    beforeEach(function() {
      loginPage = new LoginPage();
    });

    it('should open on login page', function() {
      expect(browser.getLocationAbsUrl()).toMatch('/login');
      expect(loginPage.title.getText()).toEqual('Login');
    });

  });

  function doLogin() {
    loginPage = new LoginPage();
    loginPage.txtUsername.sendKeys('admin');
    loginPage.txtPassword.sendKeys('admin');
    loginPage.btnSubmit.click();
  }

  describe('login', function() {
    beforeEach(function() {
      doLogin();
    });

    describe('update story', function() {

      beforeEach(function() {
        updateStoryPage = new UpdateStoryPage();
      });

      it('should open update story page', function() {
        expect(browser.getLocationAbsUrl()).toMatch('/app/stories');
        updateStoryPage.firstStory.click();
        expect(updateStoryPage.updateStoryHeader.getText()).toEqual('Update Story');
      });

    });

    it('should open current sprint page after logging in', function() {
      expect(browser.getLocationAbsUrl()).toMatch('/app/currentSprint');
    });

    xit('should open on home page', function() {
      expect(browser.getLocationAbsUrl()).toMatch('/app/currentSprint');
      expect(loginPage.header.getText()).toBeDefined();
      expect(loginPage.sprintListHeader.getText()).toEqual('Stories');
    });

    xit('should open navigation menu', function() {
      loginPage.menuOpener.click();
      expect(loginPage.leftMenuHeader.getText()).toEqual('Navigation');
    });

    xit('should open create sprint form', function() {
      loginPage.menuOpener.click();
      expect(loginPage.leftMenuHeader.getText()).toEqual('Navigation');
      loginPage.createSprintLink.click();
      expect(loginPage.createSprintHeader.getText()).toEqual('Create Sprint');
    });

    xit('should open users list', function() {
      loginPage.menuOpener.click();
      expect(loginPage.leftMenuHeader.getText()).toEqual('Navigation');
      loginPage.usersLink.click();
      expect(loginPage.linksHeader.getText()).toEqual('Users');
    });

    xit('should open sprints list', function() {
      loginPage.menuOpener.click();
      expect(loginPage.leftMenuHeader.getText()).toEqual('Navigation');
      loginPage.sprintsLink.click();
      expect(loginPage.linksHeader.getText()).toEqual('Sprints');
    });

    xit('should open stories list', function() {
      loginPage.menuOpener.click();
      expect(loginPage.leftMenuHeader.getText()).toEqual('Navigation');
      loginPage.storiesLink.click();
      expect(loginPage.linksHeader.getText()).toEqual('Stories');
    });

    xit('should open login popup', function() {
      loginPage.menuOpener.click();
      expect(loginPage.leftMenuHeader.getText()).toEqual('Navigation');
      loginPage.loginLink.click();
      expect(loginPage.loginHeader.getText()).toEqual('Login');
      expect(browser.getLocationAbsUrl()).toMatch('/app/login');

    });
  });

  describe('current sprint page', function() {
    beforeEach(function() {
      doLogin();
    });

    it('should open current sprint page after logging in', function() {
      expect(browser.getLocationAbsUrl()).toMatch('/app/currentSprint');
    });

    xit('should open on home page', function() {
      expect(browser.getLocationAbsUrl()).toMatch('/app/currentSprint');
      expect(loginPage.header.getText()).toBeDefined();
      expect(loginPage.sprintListHeader.getText()).toEqual('Stories');
    });

    xit('should open navigation menu', function() {
      loginPage.menuOpener.click();
      expect(loginPage.leftMenuHeader.getText()).toEqual('Navigation');
    });

    xit('should open create sprint form', function() {
      loginPage.menuOpener.click();
      expect(loginPage.leftMenuHeader.getText()).toEqual('Navigation');
      loginPage.createSprintLink.click();
      expect(loginPage.createSprintHeader.getText()).toEqual('Create Sprint');
    });

    xit('should open users list', function() {
      loginPage.menuOpener.click();
      expect(loginPage.leftMenuHeader.getText()).toEqual('Navigation');
      loginPage.usersLink.click();
      expect(loginPage.linksHeader.getText()).toEqual('Users');
    });

    xit('should open sprints list', function() {
      loginPage.menuOpener.click();
      expect(loginPage.leftMenuHeader.getText()).toEqual('Navigation');
      loginPage.sprintsLink.click();
      expect(loginPage.linksHeader.getText()).toEqual('Sprints');
    });

    xit('should open stories list', function() {
      loginPage.menuOpener.click();
      expect(loginPage.leftMenuHeader.getText()).toEqual('Navigation');
      loginPage.storiesLink.click();
      expect(loginPage.linksHeader.getText()).toEqual('Stories');
    });

    xit('should open login popup', function() {
      loginPage.menuOpener.click();
      expect(loginPage.leftMenuHeader.getText()).toEqual('Navigation');
      loginPage.loginLink.click();
      expect(loginPage.loginHeader.getText()).toEqual('Login');
      expect(browser.getLocationAbsUrl()).toMatch('/app/login');

    });
  });

});
