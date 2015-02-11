define(
  [
    "../module",
    "./culture"
  ],
  function(module)
  {
    module.service(
      "resources", 
      [
        "$q", "culture",
        function($q, culture)
        {
          return function(id, ignoreRequestError)
          {
            return $q(function(resolve, reject)
            {
              var url = id.replace("{langID}", culture.langID);

              require(
                [url],
                function(resource) { resolve(resource); },
                ignoreRequestError ?
                  reject :
                  function() { throw 'Failed to load: ' + url; });
            });
          };
        }
      ]);
  });