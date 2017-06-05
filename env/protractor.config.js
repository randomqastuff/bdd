exports.config = {
  // DO NOT PUT seleniumAddress if you do not want
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  capabilities: {
    // browserName: 'chrome',
    // browserName: 'firefox',
    browserName: 'internet explorer',
    maxInstances: 1
  },
  baseUrl: 'http://www.google.com',

  // Source: http://www.protractortest.org/#/tutorial
  // framework: 'jasmine',
  // specs: ['./protractor-spec.js'],

  // Source: https://github.com/mllrsohn/gulp-protractor
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
      '../features/step_definitions/**/*_steps.js',
      '../features/step_definitions/hooks/hooks.js'
    ],

    tags: ['~@skip', '~@wip', '@test-selenium']
  }

  // allScriptsTimeout: 30000
  // format: 'summary'
};
