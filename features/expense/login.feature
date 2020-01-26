Feature: Login Page

Scenario: Opening Login Page

  Given I navigate to "https://expense-react-app.azurewebsites.net/login"
  Then the page "#app > div > div.ml-4 > h3" contains a label as "Login"
  And set textbox "#userId" value with "test99"
  And set textbox "#password" value with "test99"
  Then pause for "200"
  Then click "button[type=submit]" button
  Then pause for "2000"
  Then the page "#app > div > div.ml-4 > h3" contains a label as "User Profile"
