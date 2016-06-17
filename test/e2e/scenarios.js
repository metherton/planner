'use strict';

var HomePage = require('./pages/home.page.js');

describe('planner App E2E Testing', function() {

  var page;

  beforeEach(function() {
    page = new HomePage();
  });

  it('should open on home page', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/app/currentSprint');
    expect(page.header.getText()).toBeDefined();
    expect(page.sprintListHeader.getText()).toEqual('Stories');
  });

  it('should open navigation menu', function() {
    page.menuOpener.click();
    expect(page.leftMenuHeader.getText()).toEqual('Navigation');
  });

  it('should open create sprint form', function() {
    page.menuOpener.click();
    expect(page.leftMenuHeader.getText()).toEqual('Navigation');
    page.createSprintLink.click();
    expect(page.createSprintHeader.getText()).toEqual('Create Sprint');
  });

  it('should open users list', function() {
    page.menuOpener.click();
    expect(page.leftMenuHeader.getText()).toEqual('Navigation');
    page.usersLink.click();
    expect(page.linksHeader.getText()).toEqual('Users');
  });

  it('should open sprints list', function() {
    page.menuOpener.click();
    expect(page.leftMenuHeader.getText()).toEqual('Navigation');
    page.sprintsLink.click();
    expect(page.linksHeader.getText()).toEqual('Sprints');
  });

  it('should open stories list', function() {
    page.menuOpener.click();
    expect(page.leftMenuHeader.getText()).toEqual('Navigation');
    page.storiesLink.click();
    expect(page.linksHeader.getText()).toEqual('Stories');
  });

  it('should open login popup', function() {
    page.menuOpener.click();
    expect(page.leftMenuHeader.getText()).toEqual('Navigation');
    page.loginLink.click();
    expect(page.loginHeader.getText()).toEqual('Login');
    expect(browser.getLocationAbsUrl()).toMatch('/app/login');

  });

});
