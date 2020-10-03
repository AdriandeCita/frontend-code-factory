/* Main watcher */
const config = require('./config');
const buildCss = require("./build-css");
const buildHtml = require("./build-html");
const buildImages = require("./build-images");
const buildText = require("./build-text");
const buildJs = require("./build-js");
const buildFonts = require("./build-fonts");

const gulp = require('gulp');

function watch(done) {
    gulp.watch(config.pathTo.Src.css, buildCss);
    gulp.watch(config.pathTo.Src.Html, buildHtml);
    gulp.watch(config.pathTo.Src.Images, buildImages);
    gulp.watch(config.pathTo.Src.Txt, buildText);
    gulp.watch(config.pathTo.Src.JS, buildJs);
    gulp.watch(config.pathTo.Src.Fonts, buildFonts);

    done();
}

module.exports = watch
