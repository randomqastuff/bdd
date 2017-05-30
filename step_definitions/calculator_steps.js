'use strict';

const expect			= require('chai').use(require('chai-as-promised')).expect;

const calculatorSteps = function () {
    // ===============================================================================================
    // Calculator
    // ===============================================================================================

    this.Given(/^the calculator is cleared$/, () => {
        callback.pending();
    });
    this.When(/^I add (\d+) and (\d+)$/, (number1, number2) => {
        callback.pending();
    });
    this.Then(/^the result should be (\d+)$/, (result) => {
        callback.pending();
    });
};
module.exports = calculatorSteps;