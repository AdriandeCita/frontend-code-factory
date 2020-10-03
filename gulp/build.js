const { series } = require('gulp');

const clean = require('./clean')
const buildHtml = require('./build-html')
const buildCss = require('./build-css')
const buildJs = require("./build-js");
const buildImages = require("./build-images");
const buildFonts = require("./build-fonts");
const buildSvg = require("./build-svg");
const buildText = require("./build-text");

module.exports = series(clean, buildHtml, buildJs, buildImages, buildSvg, buildFonts, buildCss, buildText);
//         'build-png-sprite',
