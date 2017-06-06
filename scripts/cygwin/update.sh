#!/bin/bash
clear &&
echo ==================== &&
echo == Cygwin: Update == &&
echo ==================== &&

sed -i 's/\r$//' *.sh &&
	npm install npm@latest -g &&
	npm update -g &&
    echo 1--------------------------- &&
#	rm -r node_modules || true &&
	npm install &&
	npm prune &&
    echo 2--------------------------- &&
	./node_modules/.bin/selenium-standalone install &&
	./node_modules/.bin/gulp webdriver-update &&
    echo 4--------------------------- &&
    #cp -n ./vendor/*.* ./node_modules/protractor/node_modules/webdriver-manager/selenium &&
    cp -n ./node_modules/protractor/node_modules/webdriver-manager/selenium/*.* ./vendor &&
    echo 5--------------------------- &&
	npm cache verify
