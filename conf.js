exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    // sauceRegion: 'eu',
    sauceSeleniumAddress: 'ondemand.us-east-1.saucelabs.com/wd/hub',
    specs: ['specs/*spec.js'],

    onPrepare: function () {
        var caps = browser.getCapabilities()
    },

    multiCapabilities: [{
        browserName: 'firefox',
        version: 'latest',
        platform: 'linux',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'chrome',
        version: 'latest',
        platform: 'linux',
        name: "chrome-tests",
        shardTestFiles: true,
        maxInstances: 25
    }],

    onComplete: function () {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
    }
}
