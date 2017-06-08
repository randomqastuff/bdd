exports.config = {
  capabilities: {
    //browserName: 'chrome',
    browserName: 'firefox',
    maxInstances: 1
  },
  //directConnect: true //test script communicates directly Chrome Driver or Firefox Driver, bypassing any Selenium Server
  seleniumAddress: 'http://localhost:4444/wd/hub',  // imply that => directConnect: false
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

    format: 'json:./reports/cucumber.json',

    // Cucumber tags to run, and to not run
    tags: ['~@skip', '~@wip', '~@SKIP', '~@WIP', '@test-selenium']
  },

  allScriptsTimeout: 30000
};
