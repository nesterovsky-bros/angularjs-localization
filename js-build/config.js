module.exports = 
{
  baseUrl: "../js-dev",
  dir: "../js",
  mainConfigFile: "../js-dev/config.js",

  paths:
  {
    requireLib: "require",
    angular: "empty:",
    "angular-ui-bootstrap": "empty:"
  },

  pragmas:
  {
    build: true
  },

  optimize: "none",
  skipDirOptimize: true,
  preserveLicenseComments: false,

  //uglify2:
  //{
  //  output:
  //  {
  //    max_line_length: 10000
  //  }
  //},

  inlineText: true,
  //useStrict: true,

  stubModules: ["text"],
  optimizeAllPluginResources: true,
  findNestedDependencies: true,
  removeCombined: true,

  modules:
  [
    {
      name: "requireLib",
      include: ["text"]
      //override:
      //{
      //  optimize: "uglify2",
      //  generateSourceMaps: true
      //}
    },
    {
      name: "config",
      //include: ["text"],
      exclude: ["i18n/resources"]
      //override:
      //{
      //  optimize: "uglify2",
      //  generateSourceMaps: true
      //}
    },
    {
      name: "i18n/resources",
      exclude: ["text"],
      include:
      [
        "i18n/resources",
        "text!i18n/form.html!strip",
        "text!i18n/langSelector.html!strip"
      ]
    }
  ],

  config:
  {
    langIDs: ["en", "ru", "he"]
  }
};