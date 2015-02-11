define(
'app/resources/he',{
  done: "מוכן"
});

define('text!app/form/he.html!strip',[],function () { return '<form style="direction: rtl">\r\n    <label>שם: <input type="text" ng-model="application.name" /></label><br />\r\n    <label>כתובת: <input type="text" ng-model="application.address" /></label><br />\r\n    <label>טלפון: <input type="text" ng-model="application.phone" /></label><br />\r\n    <label>דוא"ל: <input type="text" ng-model="application.email" /></label><br />\r\n\r\n    <input type="button" value="שלח" ng-click="application.action()" />\r\n  </form>\r\n';});

