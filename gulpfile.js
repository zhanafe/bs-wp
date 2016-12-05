const gulp = require('gulp');

const bs = require('browser-sync').create();
const bsConfig = require('./bs-config.js');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const webpackCompiler = webpack(webpackConfig);

const webpackDevMiddleware = require('webpack-dev-middleware')(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
  });

webpackCompiler.plugin('done', stats => { bs.reload(); });

Object.assign(bsConfig, { middleware: [webpackDevMiddleware] });

gulp.task('dev', () => {
  bs.init(bsConfig);
  });
