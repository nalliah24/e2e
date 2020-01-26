const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I open Google's search page$/, () => {
  return client.url('http://google.com').waitForElementVisible('body', 1000);
});

Then(/^the Google search form exists$/, () => {
  return client.assert.visible('input[name="q"]');
});
