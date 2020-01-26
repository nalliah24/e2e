Feature: Expense Page

Scenario: Opening Expense Page

  Given I navigate to "https://expense-react-app.azurewebsites.net/login"
  Then the page "#app > div > div.ml-4 > h3" contains a label as "Login"
  And set textbox "#userId" value with "test99"
  And set textbox "#password" value with "test99"
  Then pause for "200"
  Then click "button[type=submit]" button
  Then pause for "2000"
  Then click "#app > div > div.ml-4 > div > div:nth-child(3) > a > button" button
  Then pause for "2500"
  Then the page "#app > div > div.ml-4 > div > div.mt-4.mb-4" contains a label as "Number Of Transactions: 5"
  Then pause for "200"

Scenario: Add Additional Expense

  Given I navigate to "https://expense-react-app.azurewebsites.net/login"
  Then the page "#app > div > div.ml-4 > h3" contains a label as "Login"
  And set textbox "#userId" value with "test99"
  And set textbox "#password" value with "test99"
  Then pause for "300"
  Then click "button[type=submit]" button
  Then pause for "2000"
  Then click "#app > div > div.ml-4 > div > div:nth-child(3) > a > button" button
  Then pause for "2500"
  Then the page "#app > div > div.ml-4 > div > div.mt-4.mb-4" contains a label as "Number Of Transactions: 5"
  Then pause for "200"
  Then click "#app > div > div.ml-4 > div > div.mt-5 > a > button" button
  And set textbox "#row-header > div > input" value with "2019-05-24"
  And set textbox "input[name=description]" value with "test99"
  And set textbox "input[name=amount]" value with "2500.99"
  And set textbox "input[name=tax]" value with "250.01"
  And set textbox "select[name=category]" value with "FOOD"
  Then pause for "200"
  Then click "#row-header > div > button.btn.btn-primary.ml-2" button
  Then pause for "200"
  Then the page "#app > div > div.ml-4 > div > div.mt-4.mb-4" contains a label as "Number Of Transactions: 6"
  Then pause for "200"
