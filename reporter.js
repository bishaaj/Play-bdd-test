const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    jsonFile:'cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        'App Version': 'Sitecore 9.2.0',
        'Test Environment': 'UAT',
        Browser: 'Chrome 104.0',
        Platform: 'Windows 10',
    },
}

reporter.generate(options)