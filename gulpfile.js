const { task, parallel, src, dest, watch, lastRun, series } = require('gulp');
const imagemin = require('gulp-imagemin'),
    sass = require("gulp-sass"),
    pug = require("gulp-pug"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    minify = require("gulp-minify"),
    rollup = require('gulp-better-rollup'),
    babel = require('rollup-plugin-babel'),
    commonjs = require('@rollup/plugin-commonjs'),
    resolve = require('rollup-plugin-node-resolve'),
    browserSync = require('browser-sync'),
    iconfont = require('gulp-iconfont'),
    prefix = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    consolidate = require('gulp-consolidate');
    iconfontCss = require('gulp-iconfont-css');

const cleanCSS = require('gulp-clean-css');

const bundlePath = "output/_assets/";
const jsPath = 'public/src/js/script.js';
const cssPath = 'public/src/scss/style.scss';
const imgPath = 'public/src/images/**/**';
const fontsPath = 'public/src/icons/fonts/**/**';
const viewsPath = 'views/**.pug';
const iconsPath = 'public/src/icons/*.svg';
const iconsFolderPath = 'public/src/icons/**';

const configuration = {
    paths: {
        src: {
            css: [
                'public/src/scss/style.scss'
            ],
            js: [
                'public/src/js/script.js',
            ]
        }
    }
};

function js() {
    return src(configuration.paths.src.js)
        .pipe(rollup(
            {
                plugins: [
                    babel({
                        babelrc: false,
                        presets: [['@babel/preset-env', { modules: false }]],
                    }),
                    resolve({ browser: true }),
                    commonjs()
                ]
            }, { format: 'umd' }))
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(dest('./output/_assets/js'));
}

function css() {
    return src(configuration.paths.src.css)
        .pipe(concat('style.min.css'))
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(cleanCSS({ compatibility: 'ie10' }))
        .pipe(prefix())
        .pipe(dest('output/_assets/css'));
}

function images() {
    return src(imgPath)
        .pipe(imagemin())
        .pipe(dest('output/_assets/images/'));
}

function icons() {
    return src(iconsFolderPath)
        .pipe(imagemin())
        .pipe(dest(bundlePath + 'icons/'));
}

function fonts() {
    return src("public/src/fonts/**", { allowEmpty: true })
        .pipe(dest(bundlePath + 'fonts/'))
}

function mapGlyphs(glyph) {
    return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) }
}


function iconFont (){
    let runTimestamp = Math.round(Date.now() / 1000);
    return src('public/src/icons/*.svg')
        .pipe(iconfontCss({
            fontName: "icon-fonts",
            path: 'public/src/icons/webicons.css',
            targetPath: '../../../../public/src/scss/icons/icons.scss',
            fontPath: '../fonts/web-icons/',
        }))
        .pipe(iconfont({
            fontName: 'icon-fonts', // required
            prependUnicode: false, // recommended option
            appendCodepoints: true,
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], // default, 'woff2' and 'svg' are available
            timestamp: runTimestamp, // recommended to get consistent builds when watching files
            normalize: true,
            fontHeight: 448, // matching IcoMoon's defaults for the font-awesome icons @ "14px grid"
            descent: 64
        }))
        .pipe(dest('./output/_assets/fonts/web-icons'));
}

function views() {
    return src(viewsPath)
        .pipe(pug({pretty: true}))
        .pipe(dest('output/'))
        .pipe(browserSync.reload({ stream: true }))
}

function browserSyncBrowser() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "./output/index.html"
        }
    })
};

function bsReload() {
    browserSync.reload();
};

exports.build = parallel(views, js, css, images, iconFont, fonts, icons, (done) => {
    done();
});

exports.default = series(js, css, views, iconFont, fonts, images, icons, (done) => {
    watch([jsPath, 'public/src/js/**/**'], js);
    watch([cssPath, 'public/src/scss/**/**'], css);
    watch(imgPath, images);
    watch(fontsPath, iconFont);
    watch(iconsFolderPath, icons);
    watch([viewsPath, 'views/**/**'], views);
    browserSyncBrowser();
    done();
});


