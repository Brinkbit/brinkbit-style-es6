'use strict';

const gulp = require( 'gulp' );
const changed = require( 'gulp-changed' );
const mocha = require( 'gulp-mocha' );
const eslint = require( 'gulp-eslint' );
const rename = require( 'gulp-rename' );
const chmod = require( 'gulp-chmod' );

gulp.task( 'copy script', () => {
    const dest = 'scripts';
    return gulp.src( 'bin/eslint-pre-commit' )
    .pipe( chmod( 744 ))
    .pipe( gulp.dest( dest ));
});

gulp.task( 'copy eslintrc', () => {
    const dest = './';
    return gulp.src( 'bin/eslintrc' )
    .pipe( changed( dest ))
    .pipe( rename( '.eslintrc' ))
    .pipe( gulp.dest( dest ));
});

gulp.task( 'lint', [ 'copy script', 'copy eslintrc' ], () => {
    return gulp.src([ '**/*.js', '!node_modules/**' ])
    .pipe( eslint())
    .pipe( eslint.format())
    .pipe( eslint.failAfterError());
});

gulp.task( 'test', ['lint'], () => {
    return gulp.src(['test/**/*.js'])
    .pipe( mocha());
});

gulp.task( 'default', ['test']);
