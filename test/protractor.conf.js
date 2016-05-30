exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        'e2e/scenarios.js'
    ],
    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8100',

    framework: 'jasmine',
    directConnect: true,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
