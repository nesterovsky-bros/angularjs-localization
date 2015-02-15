define(
  [
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