'use strict';

var LoginPage = function () {
  browser.get('/');
};

LoginPage.prototype = Object.create({}, {
  title: {get: function() {return element(by.xpath('//h1'));} },
  txtUsername: {get: function() {return element(by.model('vm.loginData.username'));} },
  txtPassword: {get: function() {return element(by.model('vm.loginData.password'));} },
  btnSubmit: {get: function() {return element(by.xpath('//button[@type=\'submit\']'));} },
  menuOpener: { get: function () { return element(by.xpath('/html/body/ion-nav-view/ion-side-menus/ion-side-menu-content/ion-nav-bar/div[2]/ion-header-bar/div[1]/span/button')); }},

});

module.exports = LoginPage;
