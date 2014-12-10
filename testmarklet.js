(function () {
  "use strict";

  var afterLoad, config, body, testdiv;

  // config
  config = {
    testUrl: '//localhost:3000/test.js',
    expectCss: "//cdnjs.cloudflare.com/ajax/libs/mocha/2.0.1/mocha.css",
    expectJs: "//cdnjs.cloudflare.com/ajax/libs/mocha/2.0.1/mocha.js",
    assertJs: "//cdnjs.cloudflare.com/ajax/libs/chai/1.10.0/chai.min.js",
    scriptTimeout: 3000
  };

  function addDomStuff() {
    if (document.querySelectorAll('#mocha').length == 0) {
      body = document.getElementsByTagName("body")[0];

      testdiv = document.createElement("div");
      testdiv.id = "mocha";

      testdiv.style.position = "fixed";
      testdiv.style.top = 0;
      testdiv.style.right = 0;
      testdiv.style.height = "100%";
      testdiv.style.width = "420px";
      testdiv.style.overflow = "scroll";
      testdiv.style.background = "white";

      body.appendChild(testdiv);
    }
  }

  function afterLoad() {
    mocha.setup('bdd');
    window.expect = chai.expect;

    loadScript(config.testUrl).then(function () {
      mocha.run();
    });
  };

  function loadScript(url) {
    return new Promise(function(resolve, reject) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = url;

      script.onload = function() {
        resolve();
      };

      document.getElementsByTagName("head")[0].appendChild(script);
    });
  }

  function loadStylesheet(url) {
    var link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";
    link.type = "text/css";

    document.getElementsByTagName("head")[0].appendChild(link);
  }

  function loadScripts(urls, callback) {
    var promises = [];

    urls.forEach(function(url) {
      promises.push(loadScript(url));
    });

    Promise.all(promises).then(function () {
      callback();
    });
  }

  addDomStuff();
  loadStylesheet(config.expectCss);
  loadScripts([config.expectJs, config.assertJs], afterLoad);

})();
