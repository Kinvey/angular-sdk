const gulp = require('gulp');
const $ = require('gulp-load-plugins')({
  camelize: true
});
const browserify = require('browserify');
const del = require('del');
const exorcist = require('exorcist');
const source = require('vinyl-source-stream');
const transform = require('vinyl-transform');

function errorHandler(err) {
  $.util.log(err.toString());
  this.emit('end');
}

gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

gulp.task('clean', function(done) {
  return del(['dist'], done);
});

gulp.task('transpile', function() {
  return gulp.src('src/**/*.js')
    .pipe($.plumber())
    .pipe($.babel())
    .pipe(gulp.dest('es5'))
    .on('error', errorHandler);
});

gulp.task('build', ['clean', 'lint'], function () {
  return browserify({
    debug: true, // turns on/off source mapping
    entries: 'src/ngKinvey.js'
  })
  .transform('babelify', {
    comments: false,
    presets: ['es2015', 'stage-2']
  })
  .bundle()
  .pipe($.plumber())
  .pipe(source('kinvey.js'))
  .pipe(transform(function() {
    return exorcist('dist/kinvey.js.map');
  }))
  .pipe(gulp.dest('dist'))
  .on('error', errorHandler);
});
