// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by gameofpirates-theme.js.
import { name as packageName } from "meteor/gameofpirates-theme";

// Write your tests here!
// Here is an example.
Tinytest.add('gameofpirates-theme - example', function (test) {
  test.equal(packageName, "gameofpirates-theme");
});
