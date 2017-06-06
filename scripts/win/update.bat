@echo off
echo =========================
echo == Windows: Update npm ==
echo =========================

npm install npm@latest -g ^
	&& npm update -g ^
    && echo 1--------------------------- ^
rem    && if exist "node_modules" (rd /q/s "node_modules") else (echo node_modules folder not found) ^
	&& npm install ^
	&& npm prune ^
    && echo 2--------------------------- ^
    && node_modules\.bin\selenium-standalone install ^
	&& gulp webdriver-update ^
    rem && echo n | copy /-y .\vendor\*.* .\node_modules\protractor\node_modules\webdriver-manager\selenium ^
    && echo n | copy /-y .\node_modules\protractor\node_modules\webdriver-manager\selenium\*.* .\vendor ^
    && echo 3--------------------------- ^
	&& npm cache verify
