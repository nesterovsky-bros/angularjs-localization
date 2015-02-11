define(
  [
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