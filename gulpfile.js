var gulp = require('gulp');

gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('static', function() {
  return gulp.src(['package.json', 'README.md'])
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['static', 'html']);
gulp.task('default', ['build']);
