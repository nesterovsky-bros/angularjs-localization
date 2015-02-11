({
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

  stubModules: [ "text" ],
  optimizeAllPluginResources: true,
  findNestedDependencies: true,
  removeCombined: true,
  
  modules:
  [
    {
      name: "requireLib",
      //override:
      //{
      //  optimize: "uglify2",
      //  generateSourceMaps: true
      //}
    },
    {
      name: "app/resources/en",
      exclude: ["text"],
      include:
      [
        "app/resources/en",
        "text!app/form/en.html!strip",
      ],
    },
    {
      name: "app/resources/ru",
      exclude: ["text"],
      include:
      [
        "app/resources/ru",
        "text!app/form/ru.html!strip",
      ],
    },
    {
      name: "app/resources/he",
      exclude: ["text"],
      include:
      [
        "app/resources/he",
        "text!app/form/he.html!strip",
      ],
    },
    {
      name: "config",
      include: ["text"]
      //override:
      //{
      //  optimize: "uglify2",
      //  generateSourceMaps: true
      //}
    }
  ]
})