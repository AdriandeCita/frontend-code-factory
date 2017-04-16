var gulp = require('gulp'),
    config = require('./config'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    newer = require('gulp-newer'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    browserSync = require("browser-sync"),
    plumber = require('gulp-plumber');
    notify = require('gulp-notify');

gulp.task('deploy-scss', function () {
    gulp.src(config.pathTo.Src.MainScss)
        .pipe(plumber({
            errorHandler: function(error) {
                notify({
                    title: 'Scss Error',
                    message: error.msg
                }).write(error);
                gutil.log(gutil.colors.red(error.message));
                this.emit('end');
            }
        }))
        .pipe(newer(config.pathTo.Deploy.Css))
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer(config.autoprefix))
        .pipe(gulp.dest(config.pathTo.Deploy.Css))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.pathTo.Deploy.Css))
        .pipe(browserSync.reload({stream: true}));
});
