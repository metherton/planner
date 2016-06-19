'use strict';

var LoginPage = function () {
  browser.get('/');
};

LoginPage.prototype = Object.create({}, {
  title: {get: function() {return element(by.xpath('//h1'));} },
  //txtUsername: {get: function() {return element(by.model('vm.loginData.username'));} },
  //txtPassword: {get: function() {return element(by.model('vm.loginData.password'));} },
  txtUsername: {get: function() {return element(by.id('username'));} },
  txtPassword: {get: function() {return element(by.id('password'));} },
  //btnSubmit: {get: function() {return element(by.xpath('//button'));} }
  btnSubmit: {get: function() {return element(by.xpath('//button[@type=\'submit\']'));} }
});

module.exports = LoginPage;
