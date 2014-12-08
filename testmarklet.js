(function () {
  // config
  var config = {
    testUrl: '//localhost:3000/test.js',
    expectCss: "//cdnjs.cloudflare.com/ajax/libs/mocha/2.0.1/mocha.css",
    expectJs: "//cdnjs.cloudflare.com/ajax/libs/mocha/2.0.1/mocha.js",
    scriptTimeout: 3000
  };

  var callback = function() {
    mocha.setup('bdd');

    loadScript(config.testUrl, function() {
      var runner = mocha.run();
    });
  }

  window.assert = function assert(expr, msg) {
    if (!expr) throw new Error(msg || 'failed');
  }

  body = document.getElementsByTagName("body")[0]

  testdiv = document.createElement("div")
  testdiv.id = "mocha"

  body.appendChild(testdiv)

  loadStylesheet(config.expectCss)
  loadScript(config.expectJs, callback);

  function loadStylesheet(url) {
    var link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet"
    link.type = "text/css"

    document.getElementsByTagName("head")[0].appendChild(link);
  }

  function loadScript(url, callback) {
    var script = document.createElement("script")
    script.src = url;
    script.type = "text/javascript"

    script.onload = function () {
      callback();
    }

    document.getElementsByTagName("head")[0].appendChild(script);
  }
})()
