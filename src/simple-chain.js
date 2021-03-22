const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: {},
  getLength() {
	return this.result.split('~~').length;
  },
  addLink(value) {
	if(value === undefined){
		value = '';
	}
	if(this.result === ''){
		this.result += '( ' + value + ' )';
	}
	else{
	this.result += '~~( ' + value + ' )';
	}
	return this;
  },
  removeLink(position) {
	if (typeof(position)!== 'number' && (position ^ 0) !== position){
		this.result = '';
		throw new Error('Error');
	};
	let rem = this.result.split('~~');
	rem.splice(position-1,1);
	this.result = rem.join('~~');
	return this;
  },
  reverseChain() {
	this.result = this.result.split('~~').reverse().join('~~');
	return this;
  },
  finishChain() {
	let res = this.result;
	this.result = '';
	return res;
  }
};

module.exports = chainMaker;
