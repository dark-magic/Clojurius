const cucumber = require('@cucumber/cucumber');
const assert = require('assert');

const fetch = require('node-fetch');
const server = require('../src/server');
server.skipAutoStart();

class State {
  server = null;
  response = null;
}

cucumber.setWorldConstructor(State);

cucumber.Given('The server is started', async () => {
  if (!this.server) this.server = await server.start();
});

cucumber.When('I send a {word} request to {word}', async (method, endpoint) => {
  const url = `${server.baseUrl}${endpoint}`;
  this.response = await fetch(url, { method });
});

cucumber.Then('I expect the response status code to be {int}', expectedStatusCode => {
  assert.strictEqual(this.response.status, expectedStatusCode);
});
