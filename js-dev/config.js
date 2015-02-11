// 1. Build config.
require(
{
  waitSeconds: 3600,

  paths:
  {
    angular: "//ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular",
    "angular-ui-bootstrap": "//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.0",
  },

  shim:
  {
    angular: { exports: "angular" },
    "angular-ui-bootstrap": ["angular"],
  }
});

require(
// 2. Build override.
{
  bundles:
  {
    "app/resources/en":
    [
      "app/resources/en",
      "text!app/form/en.html!strip",
    ],
    "app/resources/ru":
    [
      "app/resources/ru",
      "text!app/form/ru.html!strip",
    ],
    "app/resources/he":
    [
      "app/resources/he",
      "text!app/form/he.html!strip",
    ]
  }
}

//>>excludeStart("build", pragmas.build);
&&
// 3. Development override.
{
}
//>>excludeEnd("build");
);

require(
  [
    "angular",
    "app/module",
    "app/application",
    "app/services/template-request",
  ],
  function(angular)
  {
    return angular.bootstrap(document, ["app"]);
  });
