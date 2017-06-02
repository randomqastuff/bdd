const dotenv	= require('dotenv');
const gulp      = require('gulp');
const gulpProtractor = require('gulp-protractor');
const argv		= require('yargs').argv;

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

/*
 // Testing if gulp is working
 gulp.task('test-gulp', () => {
 console.log('gulp is working');
 });

 // Testing if the default gulp is working
 gulp.task('test-default1', () => {
 console.log('gulp-default1 is working');
 });
 gulp.task('test-default2', () => {
 console.log('gulp-default2 is working');
 });
 gulp.task('default', ['test-default1', 'test-default2']);
 */

// ======================================================
// Testing Cucumber
// ======================================================

gulp.task('webdriver-update', gulpProtractor.webdriver_update);

gulp.task('test1', () => {
    console.log('default');
    return gulp.src(['features/*'])
        .pipe(gulpProtractor.protractor({
                args: [
                    '--verbose',
                    '--baseUrl', 'http://www.google.com',
                    '--cucumberOpts.tags', argv.tags || ''
                ]
            }))
        .on('error', (e) => { throw e; });
});

gulp.task('default', () => {
    console.log('default');
    return gulp.src(['features/*'])
        .pipe(gulpProtractor.protractor({
            args: [
                '--verbose',
                '--baseUrl', 'http://www.google.com',
                '--cucumberOpts.tags', argv.tags || ''
            ]
        }))
        .on('error', (e) => { throw e; });
});
