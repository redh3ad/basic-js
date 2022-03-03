const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = '';
    }
    this.result.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position > this.result.length ||
      position <= 0 ||
      (position ^ 0) !== position
    ) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.result.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const output = this.result.join('~~');
    this.result = [];
    return output;
  },
};

module.exports = {
  chainMaker,
};
