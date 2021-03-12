const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

if(!sampleActivity || typeof sampleActivity !== "string" || MODERN_ACTIVITY < sampleActivity || sampleActivity < 0){
	return false;
}
let a = parseFloat(sampleActivity);
  if(!a) {
    return false;
  }
	let k = 0.693/HALF_LIFE_PERIOD;
	let result = (Math.log(MODERN_ACTIVITY/a))/k;
	result = Math.ceil(result);
	return result;
}
