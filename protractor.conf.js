exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    onPrepare: function () {
        browser.manage().window().maximize(); // maximize the browser before executing the feature files
    },
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      'features/*.feature'
    ],
  
    baseURL: 'https://google.com.ua',
  
    cucumberOpts: {
      require: 'features/step_definitions/stepdefs.js',
      tags: false,
      profile: false,
      'no-source': true
    }
  };