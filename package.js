Package.describe({
  name: "oglify:oglify",
  version: "0.0.1",
  summary: "The core meteor package for OGLify",
  git: "https://github.com/oglify/oglify-meteor",
  documentation: "README.md",
});

Npm.depends({
  "@babel/runtime": "7.16.7",
  react: "17.0.2",
  "react-dom": "17.0.2",
  "@oglify/core": "^0.0.1",
});

// keep github private until we stop using full filepath for dependency

Package.onUse(function (api) {
  api.versionsFrom("2.5.3");
  api.use(["ecmascript", "oglify:react@0.0.1", "meteor"]);
  api.mainModule("oglify.js");
});

Package.onTest(function (api) {
  api.use(["ecmascript", "oglify:react@0.0.1", "meteor"]);
  api.use("tinytest");
  api.use("oglify");
  api.mainModule("oglify-tests.js");
});
