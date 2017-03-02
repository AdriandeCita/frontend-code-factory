/* Main watcher */
var gulp = require('gulp'),
    config = require('./config');

gulp.task('watch', ['webserver'],function() {
    gulp.watch(config.pathTo.Src.Scss, ['scss']);
    gulp.watch(config.pathTo.Src.Pug, ['pug']);
    //gulp.watch(config.pathTo.Src.Images, ['images']);
    //gulp.watch(config.pathTo.Src.PngSprite, ['png-sprite']);
    //gulp.watch('bower.json', ['bower']);
    //gulp.watch(config.pathTo.Src.Txt, ['txt']);
    //gulp.watch(config.pathTo.Src.JS, ['js']);
    //gulp.watch(config.pathTo.Src.Fonts, ['fonts']);
});
