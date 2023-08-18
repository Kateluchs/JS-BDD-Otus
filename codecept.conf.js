/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:9200',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/loginPage.js",
  },
  name: 'JS-BDD-Otus'
}