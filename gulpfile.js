const dotenv	= require('dotenv');
const gulp      = require('gulp');

// ======================================================
// SETUP ENV FOR CUCUMBER
// ======================================================

gulp.task('set-env', (done) => {
    if (process.env.NODE_ENV) {
        dotenv.config({ path: `./env/${process.env.NODE_ENV}.env` });
    }
    done();
});

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
