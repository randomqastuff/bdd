#!/bin/bash
clear &&
echo ==================== &&
echo == Cygwin: Update == &&
echo ==================== &&

sed -i 's/\r$//' *.sh &&
	npm install npm@latest -g &&
    echo 1------------------------------------- &&
	npm update -g &&
    echo 2------------------------------------- &&
	rm -r node_modules || true &&
    echo 3------------------------------------- &&
	npm install &&
    echo 4------------------------------------- &&
    cp -n ./vendor/*.* ./node_modules/protractor/node_modules/webdriver-manager/selenium &&
	gulp webdriver-update &&
    echo 5------------------------------------- &&
	./node_modules/.bin/selenium-standalone install &&
    echo 6------------------------------------- &&
	npm cache clean
