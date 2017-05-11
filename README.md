# UI BDD Automated Test Framework

## Preface
---

* Purpose: End-to-End tests for UI testing on Cygwin and Windows
* Author: Thomas Nguyen
* Date started: 2017/05/11
* Last update: 2017/05/11

## Table of contents
---

This document will show you how to:

0. [Prerequisites](#Prerequisites)
1. [Overview of packages](#Overview-of-packages)
2. [Setup](#Setup)
3. [Checking the installation](#Checking-the-installation)
4. [Running the program](#Running-the-program)
5. [Additional Configuration](#Additional-Configuration)
6. [Uninstall](#Uninstall)
7. [Known bugs](#Known-bugs)
8. [Other notes](#Other-notes)
9. [Acronyms](#Acronyms)
10. [Sources](#Sources)

## Prerequisites
---

* Windows 10
* Cygwin Bash shell
* Java Development Kit (JDK)

## Overview of packages
---

* **babel:** Turn ES6 code into readable vanilla ES5 with source maps
* **Chai:** BDD / TDD assertion library for node and the browser
* **cucumber:** software tool that computer programmers use for testing other software
* **eslint:** find problematic patterns or code that doesn't adhere to certain style guidelines
* **firefox-profile:** firefox profile for selenium WebDriverJs. Required by some packages
* **gulp:** task/build runner for development
* **mocha:** JavaScript test framework
* **mysql:** driver for the database MySql
* **protractor:** end-to-end test framework for AngularJS applications
* **selenium-webdriver:** collection of language specific bindings to drive a browser

## Setup
---

1. install and setup cygwin
    * install [Cygwin](https://cygwin.com/install.html)
    * get the version: `uname -a`
2. get the source code
    * install the package: git
    * `git clone <url>`
3. install and setup npm
    * install [npm](https://nodejs.org/en/download/)
    * All the dependencies are managed by npm
        * To install all required modules listed in the ./package.json file, run: `npm install`
        * To update all required modules listed in the ./package.json file, run: `npm update`
    * For help: npm help [command]
4. install the following packages globally (because of Windows)

    DANGER: Install the package in this order!

    * `npm install --global cucumber`
    * `npm install --global gulp-cli`
    * `npm install --global eslint@3.6.0`
        * `npm install --global eslint-plugin-import@^1.16.0`
        * `npm install --global eslint-plugin-jsx-a11y`
        * `npm install --global eslint-plugin-react`
            * `npm install --global eslint-config-airbnb`

5. Check what packages were globally installed:

    * `npm list -g --depth=0`

    The following packages should be install globally with no error:

    * cucumber@1.3.1
    * eslint@3.6.0
    * eslint-config-airbnb@12.0.0
    * eslint-plugin-import@1.16.0
    * eslint-plugin-jsx-a11y@2.2.2
    * eslint-plugin-react@6.3.0
    * gulp-cli@1.2.2
    * npm

6. Check what packages were locally installed:

    * `npm list --depth=0`

    The following packages should be install locally with no error:

    * `babel@6.5.2`
    * `babel-cli@6.16.0`
    * `babel-core@6.17.0`
    * `babel-eslint@7.0.0`
    * `babel-plugin-transform-es2015-modules-commonjs@6.16.0`
    * `babel-preset-es2015@6.16.0`
    * `chai@3.5.0`
    * `chai-as-promised@6.0.0`
    * `cucumber@1.3.1`
    * `eslint@3.7.0`
    * `eslint-config-airbnb@12.0.0`
    * `eslint-plugin-import@1.16.0`
    * `eslint-plugin-jsx-a11y@2.2.2`
    * `eslint-plugin-react@6.3.0`
    * `firefox-profile@0.4.2`
    * `ghooks@1.3.2`
    * `gulp@3.9.1`
    * `gulp-cli@1.2.2`
    * `gulp-protractor@3.0.0`
    * `gulp-shell@0.5.2`
    * `mocha@3.1.0`
    * `mysql@2.11.1`
    * `protractor@4.0.9`
    * `protractor-cucumber-framework@0.6.0`
    * `request@2.75.0`
    * `selenium-webdriver@2.53.3`

7. Get the latest web driver:
    * Download and copy in ./vendor from:
        * [npm/selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)
        * [Chrome driver](https://chromedriver.storage.googleapis.com/index.html)

8. A bit of clean up

    * Console command: `npm cache clean`
    * Result: Delete data out of the cache folder. npm stores cache data in the directory specified in npm config get cache.

## Checking the installation
---

1. Test npm
    * Console command: `npm run test-npm`
    * Result: Display on the console 'npm is working'
2. Get the versions of everything we need:
    * Console command: `npm run version`
    * Result: This runs the following commands
        * `node --version`
        * `npm --version`
        * `gulp --version`



3. Update all npm packages and webdriver
    * Console command either:
        * (cygwin only) `npm run cygwin-update`
        * (windows only) `npm run win-update`
    * Result: update all npm packages, including global packages and the webdriver
    * PS: If you get error "unregistered users are not allowed to access package ..."
        * Get the list of all the npm configuration: `npm config list`
        * Get the registry (should be https://registry.npmjs.org/): `npm config get registry`
        * Set the registry correctly: `npm set registry "https://registry.npmjs.org/"`
4. Test eslint
    * Console command either:
        * (cygwin only) `npm run cygwin-eslint`
        * (windows only) `npm run win-eslint`
    * Result: N/A
5. Test gulp
    * Console command either:
        * `npm run test-gulp`
        * `gulp test-gulp`
    * Result: Display on the console 'gulp is working'
6. Test the default gulp
    * Console command: `gulp`
    * Result: Display on the console 'gulp-default1 is working' and 'gulp-default2 is working'
7. Test Cucumber
    * Console command either:
        * (cygwin only) `npm run cygwin-cucumber`
        * (windows only) `npm run win-cucumber`
    * Result: Display on the console 'cucumber is working'
8. Test Chai:
    * Console command either:
        * (cygwin only) `npm run cygwin-chai`
        * (windows only) `npm run win-chai`
    * Result: The test should pass
9. Test the web drivers
    * Select Start, search for "Edit the system environment variables"
    * Select "Edit the system environment variables"
    * Click on "Environment Variables"
    * Edit "Path": Add "C:\Users\<username>\AppData\Roaming\npm;C:<folder>\bdd-javascript\vendor"
    * Console command either:
        * chromedriver.exe
        * geckodriver.exe
        * IEDriverServer.exe
10. Test starting Selenium-webdriver:
    * Console command either:
        * (cygwin only) `npm run cygwin-webserver`
        * (windows only) `npm run win-webserver`
        * `gulp webdriver_standalone`
    * Result: Webdriver manager (server) should be running
    * To exit: Press any key
    * Solution:
        * If webdriver-manager start does not work, try to clear out the saved files: `webdriver-manager clean`
        * If there are missing web driver (ex: IEDriverServer is not present), copy the files in ./node_modules/protractor/node_modules/webdriver-manager/selenium
11. Test Selenium client (make sure step 10 is currently running):
    * Console command either:
        * (cygwin only) `npm run cygwin-webclient`
        * (windows only) `npm run win-webclient`
    * Result: Browser should open
    * PS: Set the Internet Explorer Zoom to 100%
12. Test a page object (make sure step 10 is currently running):
    * Console command either:
        * (cygwin only) `npm run cygwin-webclientoo`
        * (windows only) `npm run win-webclientoo`
    * Result: Browser should open and run some operations
    * PS: Set the Internet Explorer Zoom to 100%

## Running the program
---

All the configuration files are located at:

* Git setup: ./.gitignore
* npm setup: ./package.json
* Eslint setup: ./.eslintrc
* Babel setup: ./.babelrc
* cucumber setup: ./features/step_definitions/hooks.js
* protractor setup: ./env/protractor.config.js

## Additional Configuration
---

* Tags suggestions:
    * Servers:
        * Production: Feature testing on production servers
        * QA: Feature testing on QA servers
    * BDD status:
        * Smoke: Smoke test
        * Regression: Regression test
        * WIP : Work in progress = incomplete feature
    * Others:
        * Bug: Feature where the test fails due to a bug

## Uninstall
---

* Console command: `npm cache clean --force`
* Uninstall all global packages: `del C:\Users\username\AppData\Roaming\npm`

## Known bugs
---

* Web driver (on a Win8.1/64bit):
    * chromedriver 32 bit - Error: "segmentation fault"
    * geckodriver-v0.11.1-win32 - Error: "An attempt was made to access a socket in a way forbidden by its access permissions"
    * IEDriverServer_Win32_3.0.0 Error: "segmentation fault"
    * IEDriverServer_Win64_3.0.0 runs very slow when entering data in text fields. IEDriverServer_Win32 should normally be used.
    * Opera 32 bit - Error: "segmentation fault"
* Application:
    * cucumber event handlers attached via registerHandler are now passed the associated object instead of an event getPayloadItem will be removed in the next major release



TO FIX:
    step 13 not working
    To do:
        HTML reporter:
             https://www.npmjs.com/package/cucumber-html-reporter
        Code: write a better UtilsConvertValue.generateName
    Final step:
        Git: Get the latest code (i.e basepage.js)
        Eslint: Run Eslint and fix the code
        ==> DONE!
MAYBE THIS CAN HELP:
    Setup: webdriver-manager
        https://www.npmjs.com/package/webdriver-manager

## Other notes
---

* In protractor.config.js, do NOT define the seleniumAddress in order to run selenium as a standalone

  ```
  exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    ...
  }
  ```

* List all open, listening, established ports on Windows 8.1:
    * netstat -a

## Acronyms
---

* BDD = Behavior-Driven Development = tests to validate expected behavior (the test syntax can be read by anyone)
* TDD = Test-Driven Development = API tests to test each unit of code
* Unit Test = white box testing
* white box test = software testing method in which the internal structure/ design/ implementation of the item being tested is known to the tester
* black box test = software testing method in which the internal structure/ design/ implementation of the item being tested is NOT known to the tester
* Gherkin = format for cucumber specification for the purpose of documentation and automated tests
* Cucumber = popular tool to help write BDD

## Sources
---

* Download:

    * [git](https://git-scm.com/)
    * [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
    * [Official Selenium HQ Drivers](http://www.seleniumhq.org/download/)

* Tutorials:

    * [README.md: preview of the readme.md](http://dillinger.io/)
    * [npm configuration](https://docs.npmjs.com/cli/config)
    * [npm package version control](https://docs.npmjs.com/cli/update)
    * [npm hooks.js](http://stackoverflow.com/questions/26584451/how-to-disable-animations-in-protractor-for-angular-js-application)
    * [Chai rules](http://chaijs.com/guide/styles/)
    * [Cucumber tags](https://github.com/cucumber/cucumber/wiki/Tags)
    * [ESLint: rules](http://eslint.org/docs/rules/)
    * [Protractor](http://www.protractortest.org/#/tutorial)
    * [Gulp: Get started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
    * [Gulp Protractor setup](https://github.com/mllrsohn/gulp-protractor)

* Inspirational codes:

    * [Cucumber code](https://github.com/denford/TuteCumber)
    * [Gulp code](https://gist.github.com/demisx/9512212)

* Others:

    * [Reasons to install some packages globally on Windows](https://github.com/eslint/eslint/issues/1238)
    * [Reasons not to define Seleniumaddress](http://stackoverflow.com/questions/39353859/selenium-webdriver-exits-with-error-code-135)