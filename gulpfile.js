const GULP = require( 'gulp' );
const SASS = require( 'gulp-sass' );
const SASS_GLOB = require( 'gulp-sass-glob' );
const AUTOPREFIXER = require( 'gulp-autoprefixer' );
const CONNECT = require( 'gulp-connect' );
const CLEAN = require( 'gulp-clean' );

GULP.task( 'styles', function() {
  return GULP.src( './src/styles/main.scss' )
    .pipe( SASS_GLOB() )
    .pipe( SASS() )
    .pipe( AUTOPREFIXER( {
      browsers: [ 'last 2 versions' ]
    } ) )
    .pipe( GULP.dest( './dist/styles' ) )
    .pipe( CONNECT.reload() );
});

GULP.task( 'server', function() {
  CONNECT.server( {
    root: 'dist',
    livereload: true
  } )
});

GULP.task( 'markup', function() {
  return GULP.src( './src/index.html' )
    .pipe( GULP.dest( './dist' ) )
    .pipe( CONNECT.reload() );
})

GULP.task( 'clean', function()  {
  return GULP.src( './dist/**/*' )
    .pipe( CLEAN() );
});

GULP.task( 'watch', [ 'clean', 'styles', 'markup' ], function() {
  GULP.watch( './src/**/*.scss', [ 'styles' ] );
  GULP.watch( './src/**/*.html', [ 'markup' ] );
});

GULP.task( 'default', [ 'watch', 'server' ] );
