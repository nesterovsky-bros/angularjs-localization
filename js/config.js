define(
  'app/module',[
    "angular",
    "angular-ui-bootstrap"
  ],
  function(angular)
  {
    return angular.module("app", ["ui.bootstrap"]);
  });
define(
  'app/services/culture',["../module"],
  function(module)
  {
    

    module.service(
      "culture",
      function()
      {
        this.langIDs = ["en", "ru", "he"];
        this.langID = "en";
      });
  });

define(
  'app/services/resources',[
    "../module",
    "./culture"
  ],
  function(module)
  {
    module.service(
      "resources", 
      [
        "$q", "culture",
        function($q, culture)
        {
          return function(id, ignoreRequestError)
          {
            return $q(function(resolve, reject)
            {
              var url = id.replace("{langID}", culture.langID);

              require(
                [url],
                function(resource) { resolve(resource); },
                ignoreRequestError ?
                  reject :
                  function() { throw 'Failed to load: ' + url; });
            });
          };
        }
      ]);
  });
define(
  'app/application',[
    "./module",
    "./services/culture",
    "./services/resources"
  ],
  function(module)
  {
    module.controller(
      "Application",
      [
        "culture", "resources",
        function(culture, resources)
        {
          this.culture = culture;
          this.name = null;
          this.address = null;
          this.phone = null;
          this.email = null;

          this.action = function()
          {
            resources("app/resources/{langID}").then(
              function(resource)
              {
                alert(resource.done);
              });
          }
        }
      ]);
  });
define(
  'app/services/template-request',[
    "../module",
    "./resources"
  ],
  function(module)
  {
    module.config(
    [
      "$provide",
      function($provide)
      {
        $provide.decorator(
          "$templateRequest",
          [
            "$delegate", "resources",
            function($delegate, resources)
            {
              return function handleRequestFn(tpl, ignoreRequestError)
              {
                return tpl.lastIndexOf("app/", 0) !== 0 ?
                  $delegate(tpl, ignoreRequestError) :
                  resources("text!" + tpl + "!strip", ignoreRequestError);
              };
            }
          ]);
      }
    ])
  });
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

define("config", function(){});

define('text',{});
