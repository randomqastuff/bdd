@echo off
echo ===============================
echo == Windows: Webdriver SERVER ==
echo ===============================

node_modules\.bin\webdriver-manager update ^
    && echo 2------------------------------------- ^
    && node_modules\.bin\webdriver-manager status ^
    && echo 3------------------------------------- ^
	&& node_modules\.bin\webdriver-manager start
