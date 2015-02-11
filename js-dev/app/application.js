define(
  [
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