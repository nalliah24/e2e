module.exports = {
  "@disabled": true,
  "Expense-react home page test": function(browser) {
    browser
      .url("https://expense-react-app.azurewebsites.net")
      .waitForElementVisible("body")
      .assert.titleContains("Expense Application with React and Redux")
      .assert.containsText("#app > div > div.jumbotron > h1 > span", "Expense Application")
      .pause(1000)
      .end();
  }
};
