Feature: Health route for the server
  In order to know if the server is up and running
  As any stakeholder of this project
  I want to be able to access a health route

  Background: 
    Given The server is started

  Scenario: Access the health route (default)
    When I send a GET request to /health
    Then I expect the response status code to be 200
