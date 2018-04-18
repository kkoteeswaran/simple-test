const register = require('babel-register').default;
register({
  ignore: [/node_modules\/(?!wdio-helpers)/],
});

module.exports = {
  specs: [
    __dirname + '/specs/**/**/*.js',
  ],
  maxInstances: 10,
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  reporters: ['dot', 'junit'],
  reporterOptions: {
    junit: {
      outputDir: __dirname + '/results',
    },
  },
  screenshotPath: './errorShots/',
  baseUrl: 'https://net.s2stagehance.com',
  waitforTimeout: 10000,
  connectionRetryCount: 3,
  framework: 'jasmine',
  onPrepare: () => {
    console.log('Integration Tests Started: ');
  },
  beforeSuite: (suite) => {
    browser.windowHandleSize({ width: 1280, height: 960 });
  },
  onComplete: () => {
    console.log('Integration Tests Completed: ');
  },
};
