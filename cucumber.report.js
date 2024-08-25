// cucumber.report.js

const reporter = require('cucumber-html-reporter');

const options = {
  jsonFile: 'Playwright POM Demo/playwright-report/cucumber-html-reporter.json',
  launchReport: true,
  noInlineScreenshots: false,
  output: 'Playwright POM Demo/playwright-report/report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  screenshotsDirectory: 'Playwright POM Demo/playwright-report/screenshots/',
  storeScreenshots: true,
  theme: 'bootstrap',
};

reporter.generate(options);