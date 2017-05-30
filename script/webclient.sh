#!/bin/bash
clear &&
echo ================================== &&
echo == Cygwin: Selenium client only == &&
echo ================================== &&

#./node_modules/.bin/protractor ./env/protractor.config.js
./node_modules/.bin/gulp run-bdd --tags @test-selenium
