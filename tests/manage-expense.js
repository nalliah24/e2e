module.exports = {
  login: browser => {
    browser
      .url("https://expense-react-app.azurewebsites.net/login")
      .waitForElementVisible("input[type=text]")
      .setValue("input[type=text]", "test99")
      .waitForElementVisible("input[type=password]")
      .setValue("input[type=password]", "test99")
      .waitForElementVisible("button[type=submit]")
      .click("button[type=submit]");
    return browser;
  },

  "Userprofile page with test99": function(browser) {
    const b = this.login(browser);
    b.pause(1000);
    b.waitForElementVisible("body");
    b.assert.containsText("h3.display-5", "User Profile");
    b.assert.containsText(
      "#app > div > div.ml-4 > div > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)",
      "test99"
    );
    // b.end();
  },

  "Userprofile page with test99": function(browser) {
    const b = this.login(browser);
    b.pause(1000);
    b.waitForElementVisible("body");
    b.assert.containsText("h3.display-5", "User Profile");
    b.assert.containsText(
      "#app > div > div.ml-4 > div > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)",
      "test99"
    );
    // b.end();
  },

};
