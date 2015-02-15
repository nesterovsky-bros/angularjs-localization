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

config.modules = config.modules.filter(
  function(module)
  {
    switch(module.name)
    {
      case "config":
      {
        configModule = module;

        return false;
      }
      case "i18n/resources":
      {
        resourcesModule = module;

        return false;
      }
      default:
      {
        return true;
      }
    }
  });

if (resourcesModule && configModule)
{
  var defaultResource;

  langIDs.forEach(
    function(langID)
    {
      var module = copy(resourcesModule, true);
      var override = module.override || (module.override = {});
      var path = override.paths || (override.paths = {});

      defaultResource || (defaultResource = module);

      module.name = adjustId(module.name, langID);
      module.create = true,
      path.i18n = "i18n/" + langID
      config.modules.push(module);
    });

  var bundles = { bundles: {} };

  bundles.bundles[resourcesModule.name] = resourcesModule.include;

  var configOverride = configModule.override || (configModule.override = {});
  var configPath = configOverride.paths || (configOverride.paths = {});

  configOverride.wrap = { start: "require(" + JSON.stringify(bundles) + ");\n" };
  
  if (defaultResource)
  {
    configPath.i18n = defaultResource.override.paths.i18n;
    configModule.exclude || (configModule.exclude = []);
    configModule.exclude.push(defaultResource.name);
  }

  config.modules.push(configModule);
}

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


