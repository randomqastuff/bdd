exports.config = {
  capabilities: {
    browserName: 'chrome',
    //browserName: 'firefox',
    //"moz:firefoxOptions": {
    //  "binary": "../vendor/geckodriver-v0.16.1.exe",
    //},
    //browserName: 'internet explorer',
    maxInstances: 1

    //'phantomjs.binary.path': './node_modules/karma-phantomjs-launcher/node_modules/phantomjs/bin/phantomjs',
    //'phantomjs.cli.args': '--web-security=false --debug=true --webdriver --webdriver-logfile=webdriver.log --webdriver-loglevel=DEBUG',
  },
  directConnect: true,
  baseUrl: 'http://www.google.com',

  // Source: http://www.protractortest.org/#/tutorial
  // framework: 'jasmine',
  // specs: ['./protractor-spec.js'],

  // set to "custom" instead of cucumber
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: ['../features/**/*.feature'],

  cucumberOpts: {
    compiler: 'es6:babel-core/register',

    // require step definitions
    require: [
      '../features/step_definitions/**/*_steps.js'
      //'../features/step_definitions/hooks/hooks.js'
    ],

    // Pick console output format display
    //format: 'summary',  // hide all cucumber steps
    //format: 'pretty',
//    format: ['progress', 'pretty:output.txt'],

    // Cucumber tags to run, and to not run
    tags: ['~@skip', '~@wip', '~@SKIP', '~@WIP', '@test-selenium']
  },

  allScriptsTimeout: 30000
};
