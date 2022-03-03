const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  let maxValue = 0;
  let step = 1;
  while (parseInt(n / step) > 0) {
    let temp = parseInt(n / (step * 10)) * step + (n % step);
    step *= 10;
    maxValue = Math.max(maxValue, temp);
  }

  return maxValue;
}

module.exports = {
  deleteDigit,
};
