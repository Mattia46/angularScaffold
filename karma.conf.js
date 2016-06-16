module.exports = function(config) {
  'use strict';

  config.set({
    autoWatch: true,

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // bower:js
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'src/*.js',
      'test/unit/*Spec.js',
      ],

      reporters: ['mocha'],

      mochaReporter: {
        output: 'autowatch',
        showDiff: true,
        colors: {
          success: 'green',
          info: 'bgGreen',
          warning: 'cyan',
          error: 'bgRed'
        }
      },

      exclude: [
        ],

        port: 8080,
        browsers: [
          'PhantomJS'
          ],

          plugins: [
            'karma-jasmine',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher',
            ],

            singleRun: false,

            colors: true,

            logLevel: config.LOG_INFO,

            // Uncomment the following lines if you are using grunt's server to run the tests
            // proxies: {
              //   '/': 'http://localhost:9000/'
            // },
            // URL root prevent conflicts with the site root
            // urlRoot: '_karma_'
          });
        };
