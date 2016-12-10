var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      './web/**/*.ts*'
    ],
    preprocessors: {
      './web/**/*.spec.ts': ['webpack']
    },
    frameworks: [ 'chai', 'mocha' ],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,    
    singleRun: false,
    autoWatchBatchDelay: 300,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
}