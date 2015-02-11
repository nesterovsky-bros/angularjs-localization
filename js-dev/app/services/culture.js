define(
  ["../module"],
  function(module)
  {
    "use strict";

    module.service(
      "culture",
      function()
      {
        this.langIDs = ["en", "ru", "he"];
        this.langID = "en";
      });
  });
