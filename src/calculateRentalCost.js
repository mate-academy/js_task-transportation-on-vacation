/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAYCOST = 40;
  const WEEKLENGTH = 7;
  const WEEKOFF = 50;
  const THREEDAYS = 3;
  const THREEDAYSOFF = 20;
  let result = days * DAYCOST;

  if (days >= WEEKLENGTH) {
    result -= WEEKOFF;
  } else if (days >= THREEDAYS) {
    result -= THREEDAYSOFF;
  }

  return result;
}

module.exports = calculateRentalCost;
