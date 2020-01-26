const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I navigate to "([^"]*)"$/, async (pageUrl) => {
  return await client.url(pageUrl).waitForElementVisible('body', 1000);
});

Then(/^pause for "([^"]*)"$/, time => {
  return client.pause(parseInt(time));
});

Then(/^end session "([^"]*)"$/, time => {
  return client.end();
});

Then(/^the title is "([^"]*)"$/, title => {
  return client.assert.title(title);
});

Then(/^the page "([^"]*)" contains a label as "([^"]*)"$/, async (elementId, text) => {
  let returnValue;
  await client.getText(
    elementId,
    ({ value }) => {
      returnValue = value;
    }
  );
  await client.assert.equal(text, returnValue);
});

Then(/^set textbox "([^"]*)" value with "([^"]*)"$/, async (elementId, text) => {
  await client.setValue(elementId, text)
});


Then(/^click "([^"]*)" button$/, (elementId) => {
  client.click(elementId)
});
