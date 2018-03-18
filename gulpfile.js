var gulp = require('gulp');
var gutil = require('gulp-util');

var srcGlobs = {
    js: 'src/**/*.!(spec.)js',
    css: 'src/**/*.scss',
    html: 'src/**/*.tpl.html'
};

gulp.task('build:css', function() {
    gutil.log('## Start "build:css"...');

    gutil.log('## End "build:css"...');
});

gulp.task('build:js', function() {
    gutil.log('## Start "build:js"...');

    gutil.log('## End "build:js"...');
});

gulp.task('build', function() {
    gutil.log('## Start "build"...');

    gutil.log('## End "build"...');
});


gulp.task('watch', function() {
    // build watches such as package.json, index.html
    // goes here.
    gulp.watch(srcGlobs.js, ['build:js']);
    gulp.watch(srcGlobs.css, ['build:css']);
});

gulp.task('default', 'build');
