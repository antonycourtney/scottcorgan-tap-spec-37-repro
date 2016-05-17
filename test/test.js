var tape = require("tape");
var tapSpec = require("tap-spec");

tape.createStream().pipe(tapSpec()).pipe(process.stdout);
require("./spec/one.js");
