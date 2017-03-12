/* Build */
var gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(callback) {
    runSequence(
        'clean-server',
        'build-pug',
        'bower',
        'build-js',
        'build-png-sprite',
        'build-images',
        'build-svg',
//        'svg-sprite',
        'build-fonts',
        'build-scss',
        'build-txt',
        callback)
});
