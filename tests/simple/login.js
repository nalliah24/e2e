module.exports = {
  "@disabled": true,
  "Expense login page with correct password": function(browser) {
    browser
      .url("https://expense-react-app.azurewebsites.net/login")
      .waitForElementVisible("input[type=text]")
      .setValue("input[type=text]", "user1")
      .waitForElementVisible("input[type=password]")
      .setValue("input[type=password]", "user1")
      .pause(1000)
      .click("button[type=submit]")
      .pause(1000)
      .assert.not.elementPresent("div.alert-danger")
      .end();
  },

  "Expense login page with incorrect password": function(browser) {
    browser
      .url("https://expense-react-app.azurewebsites.net/login")
      .waitForElementVisible("input[type=text]")
      .setValue("input[type=text]", "user1")
      .waitForElementVisible("input[type=password]")
      .setValue("input[type=password]", "xxxx")
      .pause(1000)
      .click("button[type=submit]")
      .waitForElementVisible("div.alert-danger", 2000)
      .assert.containsText(
        "div.alert-danger",
        "Error authenticating user. Please check your credentials."
      )
      .end();
  }
};
