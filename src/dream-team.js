const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let result = [];
    members.forEach((member) => {
      if (typeof member === 'string') {
        member = member
          .split('')
          .filter((el) => el != ' ')
          .join('');
        result.push(member[0].toUpperCase());
        return;
      }
    });

    return result.sort().join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
