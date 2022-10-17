const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  } else if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  if (Object.keys(date)[0]) {
    //это свойство имеется ТОЛЬКО у искуственных объектов
    throw new Error("Invalid date!");
  }

  try {
    date.valueOf();
  } catch (err) {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth();

  const SEASONS = {
    winter: [0, 1, 11],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    fall: [8, 9, 10],
  };

  for (const [season, months] of Object.entries(SEASONS)) {
    if (months.includes(month)) {
      console.log(season);
      return season;
    }
  }
}

module.exports = {
  getSeason,
};
