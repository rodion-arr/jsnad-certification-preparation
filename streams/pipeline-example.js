'use strict'
const { PassThrough, pipeline } = require("stream");

const passThrough = new PassThrough();
passThrough.on('data', data => {
    console.log('Data from pathThrough', data.toString());
});

console.log("Starting pipeline...");
pipeline(process.stdin, passThrough, process.stdout, err => {
  if (err) {
    console.log("Pipeline failed with an error:", err);
  }
});
