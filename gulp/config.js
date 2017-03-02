module.exports = {
    // Path settings
    pathTo: {
            Src: {
                Scss: 'src/scss/**/*.scss',
                MainScss: 'src/scss/main.scss',
                Pug: 'src/pug/**/*.pug',
                folder: {
                    JSVendor: 'src/js/vendor/',
                    SCSSVendor: 'src/scss/vendor/',
                },
                JSCustom: 'custom/**/*.*',
                JSVendor: 'vendor/**/*.*',

                Images: ['src/img/**/*.*', '!src/img/sprite/*.*'],
                PngSprite: 'src/img/sprite/**/*.png',
                JS: 'src/js/**/*.*',
                JSVendorBundleSource: [
                    // sources for vendor-bundle here
                    'src/js/vendor/jquery.lazyloadxt.js',
                    'src/js/vendor/jquery.mCustomScrollbar.js',
                    'src/js/vendor/jquery.vmap.min.js',
                    'src/js/vendor/jquery.vmap.world.js',
                    'src/js/vendor/slick.js',
                    'src/js/vendor/progressbar.js'],
                CSSVendor: 'src/scss/vendor/',
                Txt: ['src/humans.txt', 'src/robots.txt', 'src/.htaccess','src/CHANGELOG.md','src/README.md'],
                Fonts: 'src/scss/fonts/**/*',
                Svg: ['src/svg/**/*.*', '!src/svg/sprite/*.*'],
                SvgSprite: 'src/svg/sprite/**/*.svg',
                SvgSpriteTpl: 'src/scss/includes/_svg-sprite-sass.tpl'
            },
            Build: {
                Css: 'server/css',
                Html: 'server/',
                Clean: ['server/**/*', '!server/.gitignore'],
                JSCustomBundle: 'src/js',
                JSVendorBundle: 'src/js',

                JSVendor: 'server/js/vendor',
                JSCustom: 'server/js/custom',

                Images: 'dist/img',
                PngSprite: 'dist/img/sprite',
                PngSpriteCSS: 'src/scss/includes',
                Txt: 'dist/',
                Fonts: 'dist/css/fonts',
                Svg: 'dist/svg',
                SvgSprite: 'dist/svg/sprite/svg-sprite.svg',
                SvgSpriteNoSvg: 'dist/svg/sprite/svg-sprite.png',
                SvgSpriteCSS: 'src/scss/includes/_svg-sprite.scss'
            }
        },

    // Browser versions for automatically prefix
    autoprefix: ['last 3 versions', '> 1%', 'Firefox ESR'],

    // BrowserSync local web server settings
    browserSync: {
        server: './server',
        //serve both project distribution directories
        //server: ['./server', './build'],
        baseDir: './server',
        //disable user interface
        ui: false,
        //tunnel to *.localtunnel.me
        // tunnel: true,
        host: 'localhost',
        logPrefix: "Frontend",
        notify: false,
    }

};
