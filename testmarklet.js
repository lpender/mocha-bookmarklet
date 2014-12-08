
(function () {
  // config
  var config = {
    challengeUrl: '//',
    expectCss: "./node_modules/mocha/mocha.css",
    expectJs: "./node_modules/mocha/mocha.js",
    scriptTimeout: 3000
  };


  function assert(expr, msg) {
    if (!expr) throw new Error(msg || 'failed');
  }

  var callback = function() {
    debugger;
    mocha.setup('bdd');
    loadScript("./test.js", function() {
      var runner = mocha.run();
    });
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
