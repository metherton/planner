'use strict';

var HomePage = require('./pages/home.page.js');

describe('planner App E2E Testing', function() {

  var page;

  beforeEach(function() {
    page = new HomePage();
  });

  it('should open on home page', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/app/home");
    expect(page.header.getText()).toEqual('Current Sprint');
  });

  it('should open navigation menu', function() {
    page.menuOpener.click();
    expect(page.leftMenuHeader.getText()).toEqual("Navigation");
  });


});
