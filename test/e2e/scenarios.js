'use strict';

describe('planner App E2E Testing', function() {

  it('should automatically redirect to /', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/app/playlists");
  });


});
