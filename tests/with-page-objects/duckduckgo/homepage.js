module.exports = {
  "@disabled": true,
  'Test': function (browser) {
    var duckduckgo = browser.page.homePageSearch();

    duckduckgo.navigate()
      .assert.title('DuckDuckGo — Privacy, simplified.')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'Canada News')
      .pause(100)
      .click('@submit')
      .pause(500);

    browser.end();
  }
}