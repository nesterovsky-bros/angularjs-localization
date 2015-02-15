var requirejs = require("./r.js");
var config = require("./config.js");

var configModule;
var resourcesModule;
var langIDs = config.config.langIDs;

function copy(source, deep)
{
  return (typeof source !== "object") ||
    (source == null) ||
    (source instanceof RegExp) ||
    (source instanceof Function) ? 
      source :
    Array.isArray(source) ?
      source.reduce(
        function(target, value)
        {
          target.push(deep ?  copy(value, true) : value);

          return target;
        },
        []) :
    Object.keys(source).reduce(
      function(target, key)
      {
        target[key] = deep ?  copy(source[key], true) : source[key];

        return target;
      },
      {});
}

function adjustId(id, langID)
{
  return id.replace("i18n/", "i18n/" + langID + "/");
}

config.modules.forEach(
  function(module)
  {
    switch(module.name)
    {
      case "config":
      {
        configModule = module;

        break;
      }
      case "i18n/resources":
      {
        resourcesModule = module;

        break;
      }
    }
  });

langIDs.forEach(
  function(langID, index)
  {
    if (index == 0)
    {
      return;
    }

    var module = copy(resourcesModule, true);
    var override = module.override || (module.override = {});
    var path = override.paths || (override.paths = {});

    module.name = adjustId(module.name, langID);
    module.create = true,
    path.i18n = "i18n/" + langID
    config.modules.push(module);
  });

var bundles = { bundles: { } };

bundles.bundles[resourcesModule.name] = resourcesModule.include;

(configModule.override || (configModule.override = {})).wrap =
{
  end: "require(" + JSON.stringify(bundles) + ");"
};

requirejs.optimize(
  config,
  function(buildResponse)
  {
    console.log(buildResponse);
  },
  function(err)
  {
    console.log(err);
  });


