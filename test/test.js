var tape = require("tape");
var tapSpec = require("tap-spec");

var htest = tape.createHarness();

htest.createStream().pipe(tapSpec()).pipe(process.stdout);

var f = require("./spec/one.js");

f(htest);
