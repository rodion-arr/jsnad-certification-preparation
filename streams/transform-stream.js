'use strict'

const { Transform, pipeline } = require("stream");

const upperCaseTransform = new Transform({
  transform: function(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

pipeline(process.stdin, upperCaseTransform, process.stdout, err => {
  if (err) {
    console.log("Pipeline encountered an error:", err);
  } else {
    console.log("Pipeline ended");
  }
});
