/* Build */
var gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('deploy', function(callback) {
    runSequence(
        'clean-server',
        'deploy-pug',
        'bower',
        'deploy-js',
        'deploy-png-sprite',
        'deploy-images',
        'deploy-svg',
//        'svg-sprite',
        'deploy-fonts',
        'deploy-scss',
        'deploy-txt',
        callback)
});
