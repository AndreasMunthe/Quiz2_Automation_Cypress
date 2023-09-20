const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl : 'https://demowebshop.tricentis.com/',

    env : {
        demowebshop_url : 'https://demowebshop.tricentis.com/',
        Email : 'TestDummy99@gmail.com',
        Password : 'Testing12',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout : 5000
  },
});
