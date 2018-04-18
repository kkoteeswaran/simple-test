'use strict';

var sharedConfig = require('./wdio.conf.js');

exports.config = Object.assign(sharedConfig, {
  services: ['sauce'],
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  specs: [
    __dirname + '/specs/**/*.js',
  ],
  capabilities: [{
    browserName: 'chrome',
    version: '65.0',
    platform: 'macOS 10.12',
    screenResolution: '1280x960',
    build: process.env.JOB_NAME + '_' + process.env.BUILD_ID,
    idleTimeout: 150,
  }],
  connectionRetryTimeout: 150000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000,
  },
  // Stop triggering more tests if there is even 1 failure
  bail: 1,
});
