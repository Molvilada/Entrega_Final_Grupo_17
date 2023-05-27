const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:2368/ghost/",
    env: {
      username: "ld.molina11@uniandes.edu.co",
      password: "1234567890A.",
      userghost: "ghost-author@example.com",
      versionGhost: "3.41.1",
    },
    specPattern: "cypress/e2e_10_scenarios/*.cy.js",
    screenshotsFolder: "cypress/screenshots_10_scenarios",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
