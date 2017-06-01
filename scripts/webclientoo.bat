@echo off
echo ===================================
echo == Windows: Selenium CLIENT only ==
echo ===================================

rem node_modules\.bin\protractor ./env/protractor.config.js
node_modules\.bin\gulp run-bdd --tags @test-pageobject
