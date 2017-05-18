clear
echo ==============================
echo == Cygwin: Webdriver SERVER ==
echo ==============================

sh ./node_modules/.bin/webdriver-manager update &&
    echo 1------------------------------------- &&
    sh ./node_modules/.bin/webdriver-manager status &&
    echo 2------------------------------------- &&
    sh ./node_modules/.bin/webdriver-manager start
