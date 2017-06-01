#!/bin/bash
clear &&
echo ==================================== &&
echo == Cygwin: ESLint syntax checking == &&
echo ==================================== &&

eslint -c ./.eslintrc *.js &&
	eslint -c ./.eslintrc ./data/**/*.js &&
	eslint -c ./.eslintrc ./env/**/*.js &&
	eslint -c ./.eslintrc ./library/**/*.js &&
	eslint -c ./.eslintrc ./page_objects/**/*.js &&
	eslint -c ./.eslintrc ./step_definitions/**/*.js
