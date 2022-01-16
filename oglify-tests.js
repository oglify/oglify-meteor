// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by oglify.js.
import { name as packageName } from "meteor/oglify";

// Write your tests here!
// Here is an example.
Tinytest.add('oglify - example', function (test) {
  test.equal(packageName, "oglify");
});
