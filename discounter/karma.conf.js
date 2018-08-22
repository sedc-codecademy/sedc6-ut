module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['qunit'],
      files: [
        '*.js',
        'test/spec/*.js'
      ],
      browsers: ['Chrome'],
      singleRun: true,
      reporters: ['progress', 'coverage'],
      preprocessors: { '*.js': ['coverage'] }
    });
  };