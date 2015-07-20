var gulp = require('gulp'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    nodemon = require('gulp-nodemon');

/**
 * Paths
 */
var config = {
  bowerDir: './bower_components',
  webRoot: './public_html',
  vendorDir: './public_html/vendor',
  appDir: './public_html/app',
  assetDir: './public_html/asset',
};

/**
 * Sets NODE_ENV to 'development'
 */
gulp.task('env:dev', function() {
  process.env.NODE_ENV = 'development';
});

gulp.task('vendorCopy', function() {
  // Bootstrap fonts
  gulp.src(config.bowerDir + '/bootstrap/fonts/*')
    .pipe(gulp.dest(config.assetDir + '/fonts'));

  // Crypto.js
  gulp.src(config.bowerDir + '/cryptojslib/rollups/md5.js')
    .pipe(gulp.dest(config.vendorDir + '/cryptojslib/rollups'));

  // jQuery
  gulp.src(config.bowerDir + '/masonry/dist/masonry.pkgd.min.js')
    .pipe(gulp.dest(config.vendorDir + '/masonry'));

  // Angular and 3rd party module dependencies
  gulp.src(config.bowerDir + '/angular/angular.min.{js,js.map}')
    .pipe(gulp.dest(config.vendorDir + '/angular'));
  gulp.src(config.bowerDir + '/angular-bootstrap/ui-bootstrap-tpls.min.js')
    .pipe(gulp.dest(config.vendorDir + '/angular-bootstrap'));
  gulp.src(config.bowerDir + '/angular-ui-router/release/angular-ui-router.min.js')
    .pipe(gulp.dest(config.vendorDir + '/angular-ui-router'));
  gulp.src(config.bowerDir + '/angular-resource/angular-resource.min.{js,js.map}')
    .pipe(gulp.dest(config.vendorDir + '/angular-resource'));
  gulp.src(config.bowerDir + '/angular-jwt/dist/angular-jwt.min.js')
    .pipe(gulp.dest(config.vendorDir + '/angular-jwt'));
  gulp.src(config.bowerDir + '/angular-slugify/angular-slugify.js')
    .pipe(gulp.dest(config.vendorDir + '/angular-slugify'));
  gulp.src(config.bowerDir + '/ng-flow/dist/ng-flow-standalone.min.js')
    .pipe(gulp.dest(config.vendorDir + '/ng-flow'));
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
      paths: [config.bowerDir + '/bootstrap/less',],
    })).pipe(gulp.dest(config.assetDir + '/style'));
});

/**
 * Start Node server in dev mode with nodemon
 */
gulp.task('serve:dev', ['env:dev',], function() {
  nodemon({
    script: './server.js',
    watch: [
      './server.js',
      './route',
      './model',
      './config',
    ],
    ext: 'js, html',
  }).on('start', ['watch',])    // Run watch on start
    .on('change', ['watch',]);  // Run watch on change
});

gulp.task('watch', function() {
  gulp.watch(config.assetDir + '/style/**/*.less', ['styleConcat',]);
  gulp.watch(config.appDir + '/**/*.js', ['appConcat',]);
});

gulp.task('build', ['vendorCopy', 'appConcat', 'styleConcat',]);
gulp.task('default', ['build', 'env:dev',]);
