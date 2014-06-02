var browserify = require('browserify'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    livereload = require('gulp-livereload'),
    jade = require('gulp-jade'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),

    // Paths
    paths = {
        styles: ['./lib/scss/**/*.scss'],
        templates: ['./lib/jade/**/*.jade'],
        scripts: ['./lib/scripts/**/*.js'],
        components: ['./lib/components/**/*'],
        images: ['./lib/images/**/*']
    };


// Scripts
// =======

gulp.task('scripts', function(){
    return browserify('./lib/scripts/main.js')
    .bundle({debug: true})
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./www/js/'))
    .pipe(livereload());
});


// Styles
// ======

gulp.task('styles', function(done) {
    gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
        keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(livereload());
});


// Images
// ======

gulp.task('images', function () {
    gulp.src(paths.images)
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./www/img/'))
    .pipe(livereload());
});


// Templates
// =========

gulp.task('templates', function (done) {
    return gulp.src(paths.templates)
    .pipe(jade())
    .pipe(gulp.dest('./www/templates/'))
    .pipe(livereload());
});


// Components
// ==========

gulp.task('components', function(){
    gulp.src(paths.components)
    .pipe(gulp.dest('./www/lib/'));
});


// Helpers
// =======

gulp.task('default', ['clean'], function(){
    gulp.start('styles', 'scripts', 'images', 'templates', 'components', 'watch');
});


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
