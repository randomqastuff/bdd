const dotenv	= require('dotenv');
const gulp      = require('gulp');
const gulpProtractor = require('gulp-protractor');
const shell     = require('gulp-shell')
const argv		= require('yargs').argv;

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
// BDD
// ======================================================

gulp.task('run-bdd', () => {
    return gulp.src(['./features/*.js'])
        .pipe(gulpProtractor.protractor({
            configFile: './env/protractor.config.js',
            args: [
                '--verbose',
                '--baseUrl',
                'http://127.0.0.1:4444/wd/hub',
                '--cucumberOpts.tags', '@test-object'
            ]
        }))
        .on('error', (e) => {
            console.log(`===== ERROR: ${e} =====`);
            throw e;
        });
});

// ======================================================
// OTHERS
// ======================================================

gulp.task('webdriver-update', gulpProtractor.webdriver_update);

// ======================================================
// TMP
// ======================================================

gulp.task('set-env', (done) => {
    if (process.env.NODE_ENV) {
        dotenv.config({ path: `./env/${process.env.NODE_ENV}.env` });
    }
    done();
});

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

//gulp.task('test', shell.task([
//    ./node_modules/.bin/cucumber.js --tags @test-cucumber
//    'echo hello'
//]));

gulp.task('test2', shell.task([
    //'echo test:',
    //'sh ./node_modules/.bin/cucumber.js --tags @test-cucumber'
    //'echo(os.type()); // "Windows_NT"',
    //'echo(os.release()); // "10.0.14393"',
    //'echo(os.platform()); // "win32"'
    t = "test",
    'dir'
]))