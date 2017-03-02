/* Build */
var gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(callback) {
    runSequence(
        'clean-server',
        'build-pug',
        'bower',
        //'js-bundle',
        'build-js',
        //'png-sprite',
        //'images',
        //'svg',
//        'svg-sprite',
        //'fonts',
        'build-scss',
        //'txt',
        callback)
});
