'use strict';

const expect			= require('chai').use(require('chai-as-promised')).expect;

const calculatorSteps = function () {
    // ===============================================================================================
    // Calculator
    // ===============================================================================================

    let number1 = 0;
    let number2 = 0;

    this.Given(/^the calculator is cleared$/, (callback) => {
        callback();
    });
    this.When(/^I add "([^"]*)" and "([^"]*)"$/, (nb1, nb2, callback) => {
        number1 = eval(nb1);    // to change from String to int
        number2 = eval(nb2);    // to change from String to int
        callback();
    });
    this.Then(/^the result should be "([^"]*)"$/, (result) => {
        let result1 = number1 + number2;
        let result2 = eval(result);
        //console.log(result1 +"__"+ result2);
        expect(result1).to.equals(result2);
    });

    // ===============================================================================================
    // Test Selenium
    // ===============================================================================================

    this.Given(/^user opens Google.com$/, () => {
        console.log("START SELENIUM TEST");

        return browser.get('http://google.com', 10000)
            .then(() => { return this; });
    });
};
module.exports = calculatorSteps;