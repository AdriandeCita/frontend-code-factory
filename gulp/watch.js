/* Main watcher */
var gulp = require('gulp'),
    config = require('./config');

gulp.task('watch', ['webserver'],function() {
    gulp.watch(config.pathTo.Src.Scss, ['build-scss']);
    gulp.watch(config.pathTo.Src.Pug, ['build-pug']);
    gulp.watch(config.pathTo.Src.Images, ['build-images']);
    //gulp.watch(config.pathTo.Src.PngSprite, ['png-sprite']);
    gulp.watch('bower.json', ['bower']);
    gulp.watch(config.pathTo.Src.Txt, ['build-txt']);
    gulp.watch(config.pathTo.Src.JS, ['build-js']);
    gulp.watch(config.pathTo.Src.Fonts, ['build-fonts']);
});
