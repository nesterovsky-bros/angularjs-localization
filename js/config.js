require({"bundles":{"i18n/resources":["i18n/resources","text!i18n/form.html!strip","text!i18n/langSelector.html!strip"]}});
define(
  'app/module',[
    "angular",
    "angular-ui-bootstrap"
  ],
  function(angular)
  {
    return angular.module("app", ["ui.bootstrap"]);
  });
define('app/config',["module"], function(module) { return module.config(); });
define(
  'app/services/session',[
    "angular",
    "../module"
  ],
  function(angular, module)
  {
    module.factory(
      "session",
      ["$window", function($window)
      {
        var session =
          angular.fromJson($window.sessionStorage.getItem(module.name)) || {};

        $window.addEventListener(
          "beforeunload",
          function()
          {
            $window.sessionStorage.setItem(
              module.name,
              angular.toJson(session));
          })

        return session;
      }]);
  });
define(
  'app/application',[
    "./module",
    "./config",
    "i18n/resources",
    "./services/session"
  ],
  function(module, config, resources)
  {
    module.controller(
      "Application",
      [
        "session",
        function(session)
        {
          this.langIDs = config.langIDs;
          this.langID = "en";
          this.state = session.application || (session.application = {});

          this.action = function()
          {
            alert(resources.done);
          }
        }
      ]);
  });
define('text',{load: function(id){throw new Error("Dynamic load not allowed: " + id);}});
define(
  'app/directives/langSelector',[
    "angular",
    "../module",
    "text!i18n/langSelector.html!strip"
  ],
  function(angular, module, template)
  {
    

    module.directive(
      "langSelector",
      function()
      {
        return {
          restrict: 'A',
          scope:
          {
            langId: "=",
            langIds: "="
          },
          template: template
        };
      });
  });

define(
  'app/directives/myForm',[
    "angular",
    "../module",
    "text!i18n/form.html!strip"
  ],
  function(angular, module, template)
  {
    

    module.directive(
      "myForm",
      function()
      {
        return {
          restrict: 'E',
          scope:
          {
            name: "=",
            address: "=",
            phone: "=",
            email: "=",
            onAction: "&",
          },
          template: template
        };
      });
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
  },

  config:
  {
    "app/config":
    {
      langIDs: ["en", "ru", "he"]
    }
  }
});

define(
  'config',[
    "angular",
    "i18n/resources",
    "app/module",
    "app/application",
    "app/directives/langSelector",
    "app/directives/myForm"
  ],
  function(angular)
  {
    return angular.bootstrap(document, ["app"]);
  });

