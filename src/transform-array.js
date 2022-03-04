const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  if (arr.length === 0) {
    return [];
  }

  let array = Array.from(arr);
  array.forEach((elem, index) => {
    switch (elem) {
      case '--discard-next':
        if (index + 1 >= array.length) {
          array[index] = 'delete';
          break;
        }
        array[index] = 'delete';
        array[index + 1] = 'delete';
        break;
      case '--discard-prev':
        if (index === 0) {
          array[index] = 'delete';
          break;
        }
        array[index] = 'delete';
        array[index - 1] = 'delete';
        break;
      case '--double-next':
        if (index + 1 >= array.length) {
          array[index] = 'delete';
          break;
        }
        array[index] = array[index + 1];
        break;
      case '--double-prev':
        if (index == 0) {
          array[index] = 'delete';
          break;
        }
        array[index] = array[index - 1];
        break;
      default:
        break;
    }
  });

  return array.filter((elem) => elem !== 'delete');
}

module.exports = {
  transform,
};
