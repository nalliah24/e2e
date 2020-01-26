Feature: Expense Home Page

Scenario: Opening Expense Home Page

  Given I navigate to "https://expense-react-app.azurewebsites.net"
  Then the title is "Expense Application with React and Redux"
  And the page "#app > div > div.jumbotron > h1 > span" contains a label as "Expense Application"
  And the page "#app > div > div.jumbotron > p:nth-child(2)" contains a label as "It is demo app demonstrating user/employee submits his/her company expenses charged to their corporate credit card. User can also add additional cash expenses if required."
