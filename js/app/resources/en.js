define(
'app/resources/en',{
  done: "Done"
});

define('text!app/form/en.html!strip',[],function () { return '<form>\r\n    <label>Name: <input type="text" ng-model="application.name" /></label><br/>\r\n    <label>Address: <input type="text" ng-model="application.address" /></label><br />\r\n    <label>Phone: <input type="text" ng-model="application.phone" /></label><br />\r\n    <label>E-mail: <input type="text" ng-model="application.email" /></label><br />\r\n\r\n    <input type="button" value="Process" ng-click="application.action()"/>\r\n  </form>\r\n';});

