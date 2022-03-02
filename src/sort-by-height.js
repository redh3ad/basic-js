const { NotImplementedError } = require('../extensions/index.js');

function sortByHeight(arr) {
  const sorted = arr.filter((elem) => elem !== -1).sort((a, b) => a - b);
  const result = arr.map((elem) => (elem !== -1 ? sorted.shift() : elem));
  return result;
}

module.exports = {
  sortByHeight,
};
