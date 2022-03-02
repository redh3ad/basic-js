const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (
    !sampleActivity ||
    typeof sampleActivity !== 'string' ||
    !parseFloat(sampleActivity) ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity < 0
  ) {
    return false;
  } else {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
        (0.693 / HALF_LIFE_PERIOD),
    );
  }
}

module.exports = {
  dateSample,
};
