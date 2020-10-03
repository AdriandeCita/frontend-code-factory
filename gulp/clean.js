/* Clean build directory */
const config = require('./config'),
    del = require('del');

function clean() {
    return del(config.pathTo.Build.Clean);
}

module.exports = clean
