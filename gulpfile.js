var gulp = require('gulp');

gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['html']);
gulp.task('default', ['build']);
