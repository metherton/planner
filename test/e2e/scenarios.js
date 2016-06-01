'use strict';

var HomePage = require('./pages/home.page.js');

describe('planner App E2E Testing', function() {

  var page;

  beforeEach(function() {
    page = new HomePage();
  });

  it('should open on home page', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/app/home');
    expect(page.header.getText()).toEqual('Current Sprint');
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

});
