const { NotImplementedError } = require('../extensions/index.js');

function calculateHanoi(disksNumber, turnsSpeed) {
  const result = {};
  result.turns = Math.pow(2, disksNumber) - 1;
  result.seconds = Math.floor(result.turns / (turnsSpeed / 3600));
  return result;
}

module.exports = {
  calculateHanoi,
};
