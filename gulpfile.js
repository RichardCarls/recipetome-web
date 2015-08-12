var gulp = require('gulp'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    ngAnnotate = require('gulp-ng-annotate'),
    notify = require('gulp-notify');

/**
 * Paths
 */
var config = {
  bowerDir: './bower_components',
  webRoot: './public_html',
  vendorDir: './public_html/vendor',
  appDir: './public_html/app',
  assetDir: './public_html/asset',
  semanticDir: './semantic',
};

/**
 * Sets NODE_ENV to 'development'
 */
gulp.task('env:dev', function() {
  process.env.NODE_ENV = 'development';
});

gulp.task('vendorCopy', function() {
  // jQuery (for testing)
  gulp.src(config.bowerDir + '/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(config.vendorDir + '/jquery'));

  // Crypto.js
  gulp.src(config.bowerDir + '/cryptojslib/rollups/md5.js')
    .pipe(gulp.dest(config.vendorDir + '/cryptojslib/rollups'));

  // Masonry
  gulp.src(config.bowerDir + '/masonry/dist/masonry.pkgd.min.js')
    .pipe(gulp.dest(config.vendorDir + '/masonry'));

  // Toaster
  gulp.src(config.bowerDir + '/angularjs-toaster/toaster.min.{js,css}')
    .pipe(gulp.dest(config.vendorDir + '/angularjs-toaster'));

  // Angular and 3rd party module dependencies
  gulp.src(config.bowerDir + '/angular/angular.min.{js,js.map}')
    .pipe(gulp.dest(config.vendorDir + '/angular'));
  gulp.src(config.bowerDir + '/angular-mocks/angular-mocks.js')
    .pipe(gulp.dest(config.vendorDir + '/angular-mocks'));
  gulp.src(config.bowerDir + '/angular-animate/angular-animate.min.{js,js.map}')
    .pipe(gulp.dest(config.vendorDir + '/angular-animate'));
  gulp.src(config.bowerDir + '/angular-ui-router/release/angular-ui-router.min.js')
    .pipe(gulp.dest(config.vendorDir + '/angular-ui-router'));
  gulp.src(config.bowerDir + '/angular-resource/angular-resource.min.{js,js.map}')
    .pipe(gulp.dest(config.vendorDir + '/angular-resource'));
  gulp.src(config.bowerDir + '/angular-jwt/dist/angular-jwt.min.js')
    .pipe(gulp.dest(config.vendorDir + '/angular-jwt'));
  gulp.src(config.bowerDir + '/angular-slugify/angular-slugify.js')
    .pipe(gulp.dest(config.vendorDir + '/angular-slugify'));
  gulp.src(config.bowerDir + '/angular-sortable-view/src/angular-sortable-view.min.js')
    .pipe(gulp.dest(config.vendorDir + '/angular-sortable-view'));
});

var vendorModules = [
  config.bowerDir + '/angular-animate/angular-animate.js',
  config.bowerDir + '/angular-ui-router/release/angular-ui-router.js',
  config.bowerDir + '/angular-resource/angular-resource.js',
  config.bowerDir + '/angular-jwt/dist/angular-jwt.js',
  config.bowerDir + '/angular-slugify/angular-slugify.js',
  config.bowerDir + '/angular-sortable-view/src/angular-sortable-view.js',
  config.bowerDir + '/angularjs-toaster/toaster.js',
];

gulp.task('vendorConcat', function() {
  gulp
    .src(vendorModules)
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate())
    .pipe(concat('vendors.min.js'))
    .pipe(uglify({ mangle: false, }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.vendorDir));
});

gulp.task('appConcat', function() {
  gulp
    .src([
      config.appDir + '/**/*.module.js',
      config.appDir + '/**/*.js',
      '!' + config.appDir + '/**/*.spec.js',
    ]).pipe(ngAnnotate())
      .pipe(sourcemaps.init())
      .pipe(concat('recipetome.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.webRoot));
});

gulp.task('watch', function() {
  gulp.watch(config.appDir + '/**/*.js', ['appConcat',]);
});

gulp.task('build', ['vendorCopy', 'vendorConcat', 'appConcat',]);
gulp.task('default', ['build', 'env:dev',]);
