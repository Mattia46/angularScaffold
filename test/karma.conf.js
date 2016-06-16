// Karma configuration
// Generated on Mon Jun 13 2016 15:25:45 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      //'bower_components/angular-animate/angular-animate.js',
      //'bower_components/angular-aria/angular-aria.js',
      //'bower_components/lodash/lodash.js',
      //'bower_components/angular-datepicker/dist/angular-datepicker.js',
      //'bower_components/angular-messages/angular-messages.js',
      //'bower_components/angular-material/angular-material.js',
      //'bower_components/angular-material-icons/angular-material-icons.min.js',
      //'bower_components/angular-resource/angular-resource.js',
      //'bower_components/angular-sanitize/angular-sanitize.js',
      //'bower_components/angular-touch/angular-touch.js',
      //'bower_components/angular-ui-router/release/angular-ui-router.js',
      //'bower_components/moment/moment.js',
      //'bower_components/material-calendar/dist/angular-material-calendar.js',
      'bower_components/angular-mocks/angular-mocks.js',

      'test/unit/*.js',
      'src/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};