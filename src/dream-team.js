const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(people) {

  if (Array.isArray(people)){
    let arr=[];
    people.forEach(person => {
      if(typeof person == "string" ){
        person = person.split('').filter(item => item!=' ').join('');
        arr.push(person[0].toUpperCase());
		return;
      }
    });
	return arr.sort().join('');
}
else {
	return false;
}
}
