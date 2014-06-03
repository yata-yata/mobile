var browserify = require('browserify'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    ecstatic = require('ecstatic'),
    gulp = require('gulp'),
    http = require('http'),
    imagemin = require('gulp-imagemin'),
    jade = require('gulp-jade'),
    livereload = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),

    // Paths
    paths = {
        styles: ['./lib/styles/**/*'],
        templates: ['./lib/templates/**/*'],
        scripts: ['./lib/scripts/**/*'],
        components: ['./lib/components/**/*'],
        images: ['./lib/images/**']
    };


// Scripts
// =======

gulp.task('scripts', function(){
    return browserify('./lib/scripts/main.js')
    .bundle({debug: true})
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./www/js/'))
    .pipe(livereload(lrserver));
});


// Styles
// ======

gulp.task('styles', function() {
    gulp.src('./lib/styles/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
        keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(livereload(lrserver));
});


// Images
// ======

gulp.task('images', function () {
    gulp.src(paths.images)
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./www/img/'))
    .pipe(livereload(lrserver));
});


// Templates
// =========

gulp.task('templates', function () {
    return gulp.src(paths.templates)
    .pipe(jade())
    .pipe(gulp.dest('./www/templates/'))
    .pipe(livereload(lrserver));
});


// Components
// ==========

gulp.task('components', function(){
    gulp.src(paths.components)
    .pipe(gulp.dest('./www/lib/'));
});


// Static Serve
// ============

gulp.task('serve', function() {
    http.createServer(ecstatic({ root: __dirname + '/www/' })).listen(8000);
    lrserver.listen(35729);
});


// Helpers
// =======

gulp.task('default', ['clean', 'styles', 'scripts', 'images', 'templates', 'components', 'watch', 'serve']);


gulp.task('watch', function() {
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.templates, ['templates']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('clean', function() {
    return gulp.src([
        './lib/www/css',
        './lib/www/templates',
        './lib/www/js',
        './lib/www/img',
        './lib/www/lib'
    ], {read: false})
    .pipe(clean());
});
