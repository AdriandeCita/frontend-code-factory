module.exports = {
    // Path settings
    control: {
        // sources for vendor-bundle here
        // set them manually to override normal behaviour
        JSVendorBundleSource: [
            //'src/js/vendor/jquery.js',
            //'src/js/vendor/jquery.lazyloadxt.js',
        ]

    },
    pathTo: {
        Src: {
            css: 'src/css/**/*.css',
            MainCss: 'src/css/main.css',
            Scss: 'src/scss/**/*.scss',
            MainScss: 'src/scss/main.scss',
            Html: 'src/html/**/*.html',
            folder: {
                JSVendor: 'src/js/vendor/',
                SCSSVendor: 'src/scss/vendor/'
            },
            JSCustom: 'src/js/custom/**/*.*',
            JSVendor: 'src/js/vendor/**/*.*',
            Images: ['src/img/**/*.*', '!src/img/sprite/*.*'],
            PngSprite: 'src/img/sprite/**/*.png',
            Fonts: 'src/scss/fonts/**/*',
            Txt: ['src/humans.txt', 'src/robots.txt', 'src/.htaccess'],
            Svg: ['src/svg/**/*.*', '!src/svg/sprite/*.*'],
            JS: 'src/js/**/*.*',

            //CSSVendor: 'src/scss/vendor/',
            SvgSprite: 'src/svg/sprite/**/*.svg',
            SvgSpriteTpl: 'src/scss/includes/_svg-sprite-sass.tpl'
        },
        Build: {
            Css: 'server/css',
            Html: 'server/',
            Clean: ['server/**/*', '!server/.gitignore'],
            JSCustomBundle: 'server/js',
            JSVendorBundle: 'server/js',
            JSVendor: 'server/js',
            JSCustom: 'server/js/custom',
            Images: 'server/img',
            Fonts: 'server/css/fonts',
            Txt: 'server/',
            PngSprite: 'server/img/sprite',
            PngSpriteCSS: 'src/scss/includes',
            Svg: 'server/svg',

            SvgSprite: 'dist/svg/sprite/svg-sprite.svg',
            SvgSpriteNoSvg: 'dist/svg/sprite/svg-sprite.png',
            SvgSpriteCSS: 'src/scss/includes/_svg-sprite.scss'
        },
        Deploy: {
            Css: 'distribution/css',
            Html: 'distribution/',
            Clean: ['distribution/**/*', '!distribution/.gitignore'],
            JSCustomBundle: 'distribution/js',
            JSVendorBundle: 'distribution/js',
            JSVendor: 'distribution/js',
            JSCustom: 'distribution/js/custom',
            Images: 'distribution/img',
            Fonts: 'distribution/css/fonts',
            Txt: 'distribution/',
            PngSprite: 'distribution/img/sprite',
            PngSpriteCSS: 'src/scss/includes',
            Svg: 'distribution/svg',

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
