define(
'app/resources/ru',{
  done: "Готово"
});

define('text!app/form/ru.html!strip',[],function () { return '<form>\r\n    <label>Имя: <input type="text" ng-model="application.name" /></label><br />\r\n    <label>Адрес: <input type="text" ng-model="application.address" /></label><br />\r\n    <label>Телефон: <input type="text" ng-model="application.phone" /></label><br />\r\n    <label>Эл. почта: <input type="text" ng-model="application.email" /></label><br />\r\n\r\n    <input type="button" value="Обработать" ng-click="application.action()" />\r\n  </form>\r\n';});

