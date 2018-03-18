// TODO: Refactor out gulp commands into separate repo
// and release it 

var gulp = require('gulp');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var sourcemaps = require('gulp-sourcemaps');

var srcGlobs = {
  js: 'src/**/*.!(spec.)js',
  css: 'src/**/*.scss',
  html: 'src/**/*.tpl.html'
};
var distGlobs = {
  js: 'dist/js/*.js',
  css: 'dist/css/*.css'
};
var distDir = 'dist';

// TODO: needed?
gulp.task('build:clean', function(done) {
  // build:clean
  done();
});

gulp.task('build:css', function(done) {
  // build:css
  done();
});

gulp.task('build:js', function() {
  return gulp.src(srcGlobs.js)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('index.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(distDir + '/js'));
});

gulp.task('build:html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest(distDir));
});

gulp.task('build:assets', function() {
  return gulp.src('src/assets/**/*')
    .pipe(gulp.dest(distDir + '/assets'));
});

gulp.task('build:scripts', gulp.parallel('build:assets', 'build:js', 'build:css'));

gulp.task('build', gulp.series('build:html', 'build:scripts', 'build:clean', function(done) {
  done();
}));

// TODO: minify does not work
gulp.task('release:js', function() {
  return gulp.src(distGlobs.js)
    .pipe(minify({
      ext: {
        src: '-debug.js',
        min: 'min.js'
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest(distDir + '/js'));
});

gulp.task('release', gulp.series('build', 'release:js', function(done) {
  done();
}));

gulp.task('watch', function() {
  // build watches such as package.json, index.html
  // goes here.
  gulp.watch(srcGlobs.js, gulp.parallel('build:js'));
  gulp.watch(srcGlobs.css, gulp.parallel('build:css'));
});

gulp.task('connect', function() {
  connect.server({
    root: './dist',
    livereload: true
  });
});

gulp.task('default', gulp.series('build', function(done) {
  done();
}));
gulp.task('release', gulp.series('release', function(done) {
  done();
}));

gulp.task('serve', gulp.series('build', 'connect', 'watch', function(done) {
  done();
}));
