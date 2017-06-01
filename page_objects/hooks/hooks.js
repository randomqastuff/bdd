const MyHooks = function() {
	// AVOID USING: Before and After
	// FEATURES: Similar to BeforeScenario and AfterScenario but they are affected by BeforeSteps and AfterSteps

	// FEATURES: This runs before and after each features
	this.BeforeFeatures((scenario, callback) => {
		console.log("====> BeforeFeatures: Run this before all features");
		callback();
	});
	this.AfterFeatures((scenario, callback) => {
		console.log("====> AfterFeatures: Run this after all features");
		callback();
	});

	// FEATURES: This runs before and after each scenario
	this.BeforeScenario((scenario, callback) => {
		console.log("----> BeforeScenario");
		callback();
	});
	this.AfterScenario((scenario, callback) => {
		console.log("----> AfterScenario");
		callback();
	});

	// This runs before all steps, including Before and After
	this.BeforeStep((scenario, callback) => {
		// console.log("....> BeforeStep");
		callback();
	});
	this.AfterStep((scenario, callback) => {
		// console.log("....> AfterStep");
		callback();
	});
};
module.exports = MyHooks;
