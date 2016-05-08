'use strict';

var HomePage = require('./pages/home.page.js');

describe('planner App E2E Testing', function() {

  var page;

  beforeEach(function() {
    page = new HomePage();
  });

  it('should automatically redirect to /', function() {
    browser.sleep(1000);
    page.menuOpener.click();
    expect(browser.getLocationAbsUrl()).toMatch("/app/home");
  });


});
