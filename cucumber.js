// cucumber.js
const config = `
  --require cucumber.node.js
  --format json:playwright/reports/cucumber-html-reporter.json
  --format message:playwright/reports/cucumber-html-reporter.ndjson
  --format html:playwright/reports/report.html
  --publish-quiet
  --format @cucumber/pretty-formatter
  `;

export default config;