@echo off
echo =========================
echo == Windows: Update npm ==
echo =========================

npm install npm@latest -g ^
    && echo 1------------------------------------- ^
	&& npm update -g ^
    && echo 2------------------------------------- ^
    && rd node_modules /Q/S ^
    && echo 3------------------------------------- ^
	&& npm install ^
    && echo 4------------------------------------- ^
    && echo n | copy /-y .\vendor\*.* .\node_modules\protractor\node_modules\webdriver-manager\selenium ^
	&& gulp webdriver-update ^
    && echo 5------------------------------------- ^
    && node_modules\.bin\selenium-standalone install ^
    && echo 6------------------------------------- ^
	&& npm cache clean
