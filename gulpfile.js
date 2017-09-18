/**
 * @description 自动构建：压缩、替换、后处理
 * @author unclexiao
 * @date 2017.08.25
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var debug = require('gulp-debug');
var replace = require('gulp-replace');

var timeStamp = new Date().getTime();
var moduleName = getModuleName();

gulp.task('init', function () {
    gulp.src(['node_modules/zepto/dist/zepto.min.js']).pipe(gulp.dest('dist/lib'));
    gulp.src(['node_modules/seajs/dist/sea.js']).pipe(gulp.dest('dist/lib'));
});

gulp.task('build', ['uglify'], function () {
    var fileName = "/" + moduleName + timeStamp;
    gulp.src(['index.html'])
        .pipe(debug({title: 'replace:'}))
        .pipe(replace(new RegExp('\/' + moduleName + '\\d+'), fileName))
        .pipe(gulp.dest(''));
});


gulp.task('uglify', function () {
    var file = 'javascripts/pages/' + moduleName + '.js';
    gulp.src([file])
        .pipe(debug({title: 'uglify:'}))
        .pipe(uglify({
            mangle: {except: ['define', 'require', 'module', 'exports']},
            compress: false
        }))
        .pipe(rename(moduleName + timeStamp + '.js'))
        .pipe(gulp.dest('javascripts/pages/build/'));
});

gulp.task('delete', function () {
    var file = 'javascripts/pages/build/' + moduleName + '*.js';
    return gulp.src(file)
        .pipe(debug({title: 'delete:'}))
        .pipe(clean({force: true}));
});

gulp.task('uglifyAll', function () {
    return gulp.src('javascripts/pages/*.js')
        .pipe(uglify({
            mangle: {except: ['define', 'require', 'module', 'exports']},
            compress: false
        }))
        .pipe(rename(function (path) {
            path.basename += timeStamp;
        }))
        .pipe(gulp.dest('javascripts/pages/build/'));
});


gulp.task('htmlmin', function () {
    return gulp.src('html/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('html/build'));
});

gulp.task('cleancss', function () {
    return gulp.src('css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/build'));
});

gulp.task('default', ['uglifyAll', 'htmlmin', 'cleancss']);

gulp.task('prefix', function () {
    gulp.src('css/index.css')
        .pipe(autoprefixer({
            browsers: ['Android 4.4', 'iOS 7.1'],
            flexbox: true
        }))
        .pipe(gulp.dest('dist/css'));
});

function getModuleName() {
    var index = process.argv.indexOf("-mod"), module = '';
    if (index > -1) {
        module = process.argv[index + 1];
    }
    return module;
}