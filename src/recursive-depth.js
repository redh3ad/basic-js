const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    let one = 1;
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        one += this.calculateDepth(element);
      }
      if (one > result) {
        result = one;
      }
      one = 1;
    });

    return result;
  }
}

module.exports = {
  DepthCalculator,
};
