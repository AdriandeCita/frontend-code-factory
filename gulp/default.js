/* Default */

const { series } = require('gulp');
const watch = require("./watch");
const webserver = require("./webserver");
const build = require("./build");

module.exports = series(build, watch, webserver);
