define(
'i18n/resources',{
  done: "Done"
});

define('text!i18n/form.html!strip',[],function () { return '<form>\r\n    <label>Name: <input type="text" ng-model="name" /></label><br/>\r\n    <label>Address: <input type="text" ng-model="address" /></label><br />\r\n    <label>Phone: <input type="text" ng-model="phone" /></label><br />\r\n    <label>E-mail: <input type="text" ng-model="email" /></label><br />\r\n\r\n    <input type="button" value="Process" ng-click="onAction()"/>\r\n  </form>\r\n';});


define('text!i18n/langSelector.html!strip',[],function () { return '<div class="btn-group" dropdown>\r\n    <button type="button"\r\n      class="btn btn-small dropdown-toggle" \r\n      dropdown-toggle\r\n      ng-bind="langId">\r\n    </button>\r\n    <ul class="dropdown-menu" role="menu">\r\n      <li ng-repeat="langID in langIds">\r\n        <a ng-href="../{{langID}}/index.html">{{langID}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n';});


define("i18n/en/resources", function(){});
