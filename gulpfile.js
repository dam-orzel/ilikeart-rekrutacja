var gulp = require('gulp');

var browserSync = require('browser-sync');
var del = require('del');
var sequence = require('run-sequence');
var connect = require('gulp-connect-php');

var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var wait = require('gulp-wait');

var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var iamgemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var htmlReplace = require('gulp-html-replace');
var htmlMin = require('gulp-htmlmin');

var config = {
    dist: 'dist/',
    src: 'src/',
    srcpage: 'src/pages',
    cssin: 'src/css/main.css',
    jsin: 'src/js/**/*.js',
    imgin: 'src/img/**/*.{jpg,png,jpeg,gif}',
    htmlin: 'src/{pages,php}/**/*.{html,php}',
    scssin: 'src/scss/**/*.scss',
    cssout: 'dist/css',
    jsout: 'dist/js',
    imgout: 'dist/img',
    htmlout: 'dist/',
    scssout: 'src/css/',
    cssoutname: 'style.css',
    jsoutname: 'bundle.js',
    cssreplaceout: '../css/style.css',
    jsreplaceout: '../js/bundle.js'
};

// Watch & AutoReload
gulp.task('reload', function () {
    browserSync.reload();
});

gulp.task('serve', ['sass'], function () {

    browserSync({
        server: [config.src, config.srcpage]
    });
    gulp.watch([config.htmlin, config.jsin], ['reload']);
    gulp.watch(config.scssin, ['sass']);
});

// SASS Kompilacja
gulp.task('sass', function () {
    return gulp.src(config.scssin)
        .pipe(wait(150))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.scssout))
        .pipe(browserSync.stream());
});


//Minify CSS & JS & IMG + Concat
gulp.task('css', function () {
    return gulp.src(config.cssin)
        .pipe(concat(config.cssoutname))
        .pipe(cleanCSS())
        .pipe(gulp.dest(config.cssout));
});

gulp.task('js', function () {
    return gulp.src(config.jsin)
        .pipe(concat(config.jsoutname))
        .pipe(uglify())
        .pipe(gulp.dest(config.jsout));
})

gulp.task('img', function () {
    return gulp.src(config.imgin)
        .pipe(changed(config.imgout))
        .pipe(iamgemin())
        .pipe(gulp.dest(config.imgout));
});

gulp.task('html', function () {
    return gulp.src(config.htmlin)
        .pipe(htmlReplace({
            'css': config.cssreplaceout,
            'js': config.jsreplaceout
        }))
        .pipe(htmlMin({
            sortAttributes: true,
            sortClassName: true,
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(config.dist))
});
// Build

gulp.task('default', function () {
    sequence(['html', 'js', 'css', 'img']);
})



//Default task to run
gulp.task('s', ['serve']);