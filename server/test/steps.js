const cucumber = require('@cucumber/cucumber');
const assert = require('assert');

class State {
  startValue = 0;
  endValue = 0;
}

cucumber.setWorldConstructor(State);

cucumber.Given('I have a number {int}', startValue => {
  this.startValue = startValue;
});

cucumber.When('I add {int}', increase => {
  this.endValue = this.startValue + increase;
});

cucumber.Then('I expect the result to be {int}', expected => {
  assert.strictEqual(this.endValue, expected);
});
