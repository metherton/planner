'use strict';

var UpdateStoryPage = function () {
  browser.get('/#/app/stories');
};

UpdateStoryPage.prototype = Object.create({}, {

  firstStory: {get: function() {return element(by.repeater('story in vm.stories').row(0));} },
  txtUsername: {get: function() {return element(by.model('vm.loginData.username'));} },
  txtPassword: {get: function() {return element(by.model('vm.loginData.password'));} },
  btnSubmit: {get: function() {return element(by.xpath('//button[@type=\'submit\']'));} },
  menuOpener: { get: function () { return element(by.xpath('/html/body/ion-nav-view/ion-side-menus/ion-side-menu-content/ion-nav-bar/div[2]/ion-header-bar/div[1]/span/button')); }},
  updateStoryHeader:  {get: function () { return element(by.xpath('/html/body/div[3]/div[2]/ion-modal-view/ion-header-bar/h1')); }},
  linksHeader:{get: function() {return element(by.xpath('/html/body/ion-nav-view/ion-side-menus/ion-side-menu-content/ion-nav-bar/div[1]/ion-header-bar/div[2]'));}},
  leftMenuHeader: { get: function () { return element(by.xpath('/html/body/ion-nav-view/ion-side-menus/ion-side-menu/ion-header-bar/h1')); }},
  loginHeader: { get: function () { return element(by.xpath('//ion-modal-view//h1')); }},

  greeting: { get: function () { return element(by.binding('yourName')).getText(); }},
  todoList: { get: function () { return element.all(by.repeater('todo in todos')); }},
  typeName: { value: function (keys) { return this.yourName.sendKeys(keys); }},
  todoAt: { value: function (idx) { return this.todoList.get(idx).getText(); }},
  createSprintLink: {get: function () { return element(by.xpath('/html/body/ion-nav-view/ion-side-menus/ion-side-menu/ion-content/div[1]/ion-list/div/ion-item[10]')); }},
  usersLink: {get: function () { return element(by.xpath('/html/body/ion-nav-view/ion-side-menus/ion-side-menu/ion-content/div[1]/ion-list/div/ion-item[5]/a')); }},
  sprintsLink: {get: function () { return element(by.xpath('/html/body/ion-nav-view/ion-side-menus/ion-side-menu/ion-content/div[1]/ion-list/div/ion-item[4]/a')); }},
  storiesLink: {get: function () { return element(by.xpath('/html/body/ion-nav-view/ion-side-menus/ion-side-menu/ion-content/div[1]/ion-list/div/ion-item[6]/a')); }},
  loginLink: {get: function () { return element(by.xpath('/html/body/ion-nav-view/ion-side-menus/ion-side-menu/ion-content/div[1]/ion-list/div/ion-item[8]')); }},

  sprintListHeader: {get: function() {return element(by.xpath('//div[contains(@class,\'card\')]//h2'));} },

  createSprintHeader: {get: function () { return element(by.xpath('/html/body/div[3]/div[2]/ion-modal-view/ion-header-bar/h1')); }},
  addTodo: { value: function (todo) {
    this.todoText.sendKeys(todo);
    this.addButton.click();
  }}
});

module.exports = UpdateStoryPage;
