/* BrowserSync local web server*/
var config = require('./config'),
    browserSync = require("browser-sync");

function webserver(done) {
    browserSync(config.browserSync);

    done();
}

module.exports = webserver
