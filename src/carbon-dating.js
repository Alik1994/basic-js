const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / HALF_LIFE_PERIOD; // 0.000120994

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const OLD_ACTIVITY = Number(sampleActivity);

  if (
    !sampleActivity ||
    typeof sampleActivity !== "string" ||
    isNaN(OLD_ACTIVITY) ||
    OLD_ACTIVITY === 0 ||
    OLD_ACTIVITY >= MODERN_ACTIVITY ||
    OLD_ACTIVITY < 0
  )
    return false;

  let logarithm = Math.log(MODERN_ACTIVITY / OLD_ACTIVITY);
  let age = Math.ceil(logarithm / k);

  return age;
}

module.exports = {
  dateSample,
};
