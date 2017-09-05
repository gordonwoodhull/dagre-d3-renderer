import { configCreator } from './webpack.config'

const webpackConfig = configCreator()

export default function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'test/*.css', included: false },
      'index.js',
      'test/bundle-test.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'index.js': ['webpack'],
      'test/bundle-test.js': ['webpack'],
      'lib/**/*.js': ['coverage']
    },

    webpack: {
      module: webpackConfig.module,
      output: {
        library: 'dagreD3',
        libraryTarget: 'umd'
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'build/cov',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },

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
    browsers: ['Chrome', 'Safari', 'Firefox'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
