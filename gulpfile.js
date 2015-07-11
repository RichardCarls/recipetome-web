var gulp = require('gulp'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps');

var config = {
  bowerDir: './bower_components',
  webRoot: './public_html',
  vendorDir: './public_html/vendor',
  appDir: './public_html/app',
  assetDir: './public_html/asset',
};

gulp.task('vendorCopy', function() {
  // Bootstrap fonts
  gulp.src(config.bowerDir + '/bootstrap/fonts/*')
    .pipe(gulp.dest(config.assetDir + '/fonts'));

  // Angular and 3rd party module dependencies
  gulp.src(config.bowerDir + '/angular/angular.min.{js,js.map}')
    .pipe(gulp.dest(config.vendorDir + '/angular'));
  gulp.src(config.bowerDir + '/angular-bootstrap/ui-bootstrap-tpls.min.js')
    .pipe(gulp.dest(config.vendorDir + '/angular-bootstrap'));
});

gulp.task('appConcat', function() {
  gulp.src([
    config.appDir + '/**/*.module.js',
    config.appDir + '/**/*.js',
  ]).pipe(sourcemaps.init())
    .pipe(concat('recipetome.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.webRoot));
});

gulp.task('styleConcat', function() {
  return gulp.src(config.assetDir + '/style/recipetome.less')
    .pipe(less({
      paths: [config.bowerDir + '/bootstrap/less']
    })).pipe(gulp.dest(config.assetDir + '/style'));
});

gulp.task('watch', function() {
  gulp.watch(config.assetDir + '/style/**/*.less', ['styleConcat']);
  gulp.watch(config.appDir + '/**/*.js', ['appConcat']);
});

gulp.task('build', ['vendorCopy', 'appConcat', 'styleConcat',]);
gulp.task('default', ['build',]);
