#!/bin/bash
clear &&
echo =========================== &&
echo == Cygwin: Cucumber test == &&
echo =========================== &&

./node_modules/.bin/cucumber.js --tags @test-cucumber
