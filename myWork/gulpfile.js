var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('connect', function () {
  return browserSync.init({
    files: [
      'src/*.js',
      'css/*.css',
      'template.html'
    ],
    port: 3000,
    logConnections: true,
    notify: false,
    server: './'
  });
});

gulp.task('default',['connect']);
