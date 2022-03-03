const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  let objS1 = {};
  let objS2 = {};
  let result = [];

  s1.split('').forEach((el) => {
    if (!objS1[el]) {
      objS1[el] = 1;
    } else {
      objS1[el] += 1;
    }
  });

  s2.split('').forEach((el) => {
    if (!objS2[el]) {
      objS2[el] = 1;
    } else {
      objS2[el] += 1;
    }
  });

  for (let keyS1 in objS1) {
    for (let keyS2 in objS2) {
      if (keyS1 === keyS2) {
        result.push(`${Math.min(objS1[keyS1], objS2[keyS2])}`);
      }
    }
  }
  let res = result.map((el) => +el);
  return res.reduce((sum, cur) => (sum += cur), 0);
}

module.exports = {
  getCommonCharacterCount,
};
