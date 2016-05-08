'use strict';

var HomePage = function () {
  browser.get('index.html');
};

HomePage.prototype = Object.create({}, {
  menuOpener: { get: function () { return element(by.xpath('/html/body/ion-nav-view/ion-side-menus/ion-side-menu-content/ion-nav-bar/div[2]/ion-header-bar/div[1]/span/button')); }},
  addButton: { get: function () { return element(by.css('[value="add"]')); }},
  yourName: { get: function () { return element(by.model('yourName')); }},
  greeting: { get: function () { return element(by.binding('yourName')).getText(); }},
  todoList: { get: function () { return element.all(by.repeater('todo in todos')); }},
  typeName: { value: function (keys) { return this.yourName.sendKeys(keys); }},
  todoAt: { value: function (idx) { return this.todoList.get(idx).getText(); }},
  addTodo: { value: function (todo) {
    this.todoText.sendKeys(todo);
    this.addButton.click();
  }}
});

module.exports = HomePage;
