define(
  [
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