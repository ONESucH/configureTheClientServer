var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');


gulp.task('connect', function () {
    browserSync.init({
        server: 'app/'
    });
    gulp.watch([
        'app/css/**/*.less',
        'app/*.html',
        'app/scripts/*.js'
    ], ['build']);
});


gulp.task('build', function () {
    gulp.src('app/css/main.less')
        .pipe(less())
        .pipe(gulp.dest('app/css/'));
    browserSync.reload();
});


gulp.task('default', ['connect', 'build']);