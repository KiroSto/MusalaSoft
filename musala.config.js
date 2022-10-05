const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'musalaReporter-config.json',
  },
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 15000,
  projectId: 'c3gind',
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/pluginsMusala/musalaIndex.js')(on, config)
    },
  baseUrl: 'http://www.musala.com/',
  specPattern: './cypress/musala/testCases/*.spec.js'
  },
})
