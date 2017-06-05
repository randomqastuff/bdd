@echo off
echo =========================
echo == Windows: Update npm ==
echo =========================

npm install npm@latest -g ^
    && echo 1--------------------------- ^
	&& npm update -g ^
    && echo 2--------------------------- ^
    && if exist "node_modules" (rd /q/s "node_modules") else (echo node_modules folder not found) ^
    && echo 3--------------------------- ^
	&& npm install ^
    && echo 4--------------------------- ^
    && node_modules\.bin\selenium-standalone install ^
	&& gulp webdriver-update ^
    && echo 5--------------------------- ^
    rem && echo n | copy /-y .\vendor\*.* .\node_modules\protractor\node_modules\webdriver-manager\selenium ^
    && echo n | copy /-y .\node_modules\protractor\node_modules\webdriver-manager\selenium\*.* .\vendor ^
    && echo 6--------------------------- ^
	&& npm cache verify
