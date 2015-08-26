var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var dir = 'fourApp';

gulp.task('connect', function () {
  return browserSync.init({
    files: [
      dir + '/src/code.js',
      dir + '/css/*.css',
      dir + '/index.html'
    ],
    port: 3000,
    logConnections: true,
    notify: false,
    server: './'+dir
  });
});

gulp.task('default',['connect']);
