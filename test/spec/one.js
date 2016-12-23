// var test = require("tape");

function runTest(htest) {
  htest("whatever", function (t) {
    t.ok(true);
    t.end();
  });
}
module.exports = runTest
