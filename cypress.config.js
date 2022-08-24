const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5gc7by",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
