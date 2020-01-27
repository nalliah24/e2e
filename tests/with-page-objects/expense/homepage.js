module.exports = {
  '(PO)Expense Home Page': function (browser) {
    var expense = browser.page.homepage();

    expense.navigate()
      .assert.title('Expense Application with React and Redux')
      .waitForElementVisible("body")
      .assert.containsText("@bodyHeader", "Expense Application")
      .assert.containsText("@bodyText1", "It is demo app demonstrating user/employee submits ")
      .pause(200)
      .click("@learnMoreButton")
      .pause(500);

    browser.end();
  }
}