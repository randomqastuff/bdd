const gulp = require('gulp');

// ======================================================
// Testing Gulp
// ======================================================

// Basic test with no ES6
//gulp.task('test-gulp', function() {
//    console.log('gulp is working');
//});
// Basic test with ES6
gulp.task('test-gulp', () => {
    console.log('gulp is working');
});

// ======================================================
// Testing Cucumber
// ======================================================

gulp.task('test-cucumber', () => {
    console.log('cucumber is working');
});
