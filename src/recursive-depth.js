const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let result=1;
    let standart=1;
    arr.forEach(t => {
      if (Array.isArray(t)){
        standart+=this.calculateDepth(t);
      }
      if(standart>result){
        result=standart;
      }
	  standart=1;
    });
    return result;
  }
};
