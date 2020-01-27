module.exports = {
  "@disabled": true,
  login: browser => {
    browser
      .url("https://expense-react-app.azurewebsites.net/login")
      .waitForElementVisible("input[type=text]")
      .setValue("input[type=text]", "user1")
      .waitForElementVisible("input[type=password]")
      .setValue("input[type=password]", "user1")
      .waitForElementVisible("button[type=submit]")
      .click("button[type=submit]");
    return browser;
  },

  "Userprofile page with user1": function(browser) {
    const b = this.login(browser);
    b.pause(1000);
    b.waitForElementVisible("body");
    b.assert.containsText("h3.display-5", "User Profile");
    b.assert.containsText(
      "#app > div > div.ml-4 > div > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)",
      "User Id:"
    );
    b.assert.containsText(
      "#app > div > div.ml-4 > div > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)",
      "user1"
    );
    b.assert.containsText(
      "#app > div > div.ml-4 > div > div:nth-child(1) > div:nth-child(3) > span:nth-child(1)",
      "Email:"
    );
    b.assert.containsText(
      "#app > div > div.ml-4 > div > div:nth-child(1) > div:nth-child(3) > span:nth-child(2)",
      "nnalliah2@gmail.com"
    );
    b.end();
  }
};
