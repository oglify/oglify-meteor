Package.describe({
  name: "oglify",
  version: "0.0.1",
  summary: "The core meteor package for OGLify",
  git: "https://github.com/oglify/oglify-meteor",
  documentation: "README.md",
});

Npm.depends({
  "oglify-core": "file://./../oglify-core",
});

Package.onUse(function (api) {
  api.versionsFrom("2.5.3");
  api.use(["ecmascript", "oglify-react"]);
  api.mainModule("oglify.js");
});

Package.onTest(function (api) {
  api.use("ecmascript");
  api.use("tinytest");
  api.use("oglify");
  api.mainModule("oglify-tests.js");
});
