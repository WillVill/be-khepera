const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack');
const nodemon = require('nodemon');

const webpackConfig = require('./webpack.config.js');

gulp.task('build', function(done) {
  webpack(webpackConfig).run(function(err, stats) {
    if(err) {
      console.log('Build error', err);
    }
    else {
      console.log(stats.toString());
    }
    done();
  });
});

gulp.task('watch', function() {
  webpack(webpackConfig).watch(100, function(err, stats) {
    nodemon.restart();
  });
});

gulp.task('run', ['build', 'watch'], function() {
  nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, 'dist/index.bundle.js'),
    // Stop nodemon from watching files by giving fake values
    // This makes webpack watch for changes
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', function() {
    console.log('Restarted!');
  });
});