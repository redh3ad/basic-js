const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(n) {
  let regexp = /^[0-9a-f]{2}(-[0-9a-f]{2}){5}$/i;
  return regexp.test(n);
}
module.exports = {
  isMAC48Address,
};
