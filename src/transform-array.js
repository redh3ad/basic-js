const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if(!Array.isArray(arr)) throw Error('Invalid argument type');
	let arr2 = Array.from(arr);
	arr2.forEach((elem, index) => {
	  switch(elem) {
		case '--discard-next':
		  if(index  + 1 >= arr2.length) {
			arr2[index] = 'del'; 
			break;
		  }
		  arr2[index] = 'del';
		  arr2[index + 1] = 'del'
		  break;
		case '--discard-prev':
		  if(index == 0) {
			arr2[index] = 'del'; 
			break;
		  }
		  arr2[index] = 'del';
		  arr2[index - 1] = 'del';
		  break;
		case '--double-next':
		  if(index  + 1 >= arr2.length) {
			arr2[index] = 'del'; 
			break;
		  }
		  arr2[index] = arr2[index + 1];
		  break;
		case '--double-prev':
		  if(index == 0) {
			arr2[index] = 'del'; 
			break;
		  }
		  arr2[index] = arr2[index - 1];
		  break;
	  }
	})
	return arr2.filter(elem => elem !== 'del');
  };
