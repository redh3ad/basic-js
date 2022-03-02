const { NotImplementedError } = require('../extensions/index.js');

function getSumOfDigits(n) {
  if (String(n).length <= 1) {
    return n;
  } else {
    let res = String(n)
      .split('')
      .map((num) => Number(num))
      .reduce((sum, cur) => sum + cur);
    return getSumOfDigits(res);
  }
}

module.exports = {
  getSumOfDigits,
};
