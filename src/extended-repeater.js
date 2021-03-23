const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	if (str === undefined){
		throw new Error;
	};

	if (options.addition === undefined) {
		options.addition = '';
		};

	if (options.additionRepeatTimes === undefined) {
			options.additionRepeatTimes = 1;
		};

	if (options.repeatTimes === undefined) {
			options.repeatTimes = 1;
		};

	if (options.separator === undefined) {
			options.separator = '+';
		};

	if (options.additionSeparator === undefined) {
			options.additionSeparator = '|';
		};

	if (typeof(str) != 'string'){
		String(str);
	};

	if (typeof(options.addition) != 'string') {
		String(options.addition);
	};

	str += String(options.addition);
	for (let i = 0; i < Number(options.additionRepeatTimes) - 1; i++) {
		str += options.additionSeparator + options.addition;
	};

	let addStr = str;
	for (let j = 0; j < Number(options.repeatTimes) - 1; j++) {
		str += options.separator + addStr;
	};

	return str;
}
