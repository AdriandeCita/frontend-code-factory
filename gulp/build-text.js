/* Copy pure plain-text files */
var gulp = require('gulp'),
    config = require('./config');

function buildText() {
    return gulp.src(config.pathTo.Src.Txt)
        .pipe(gulp.dest(config.pathTo.Build.Txt))
}

module.exports = buildText
