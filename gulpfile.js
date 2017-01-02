const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('html', () => {
  return gulp.src('./src/**/*.html')
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['html'], () => {});
