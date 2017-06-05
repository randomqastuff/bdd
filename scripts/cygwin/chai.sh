#!/bin/bash
clear &&
echo ======================= &&
echo == Cygwin: Chai test == &&
echo ======================= &&

./node_modules/.bin/cucumber.js --tags @test-chai
