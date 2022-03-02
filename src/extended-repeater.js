const { NotImplementedError } = require('../extensions/index.js');

function repeater(str, options) {
  if (str === undefined) {
    throw Error();
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if (typeof str != 'string' || typeof options.addition != 'string') {
    String(str);
    String(options.addition);
  }

  str += String(options.addition);
  for (let i = 1; i < Number(options.additionRepeatTimes); i++) {
    str += options.additionSeparator + options.addition;
  }

  const replicateOfStr = str;

  for (let i = 1; i < Number(options.repeatTimes); i++) {
    str += options.separator + replicateOfStr;
  }

  return str;
}

module.exports = {
  repeater,
};
