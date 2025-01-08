/**
 * @param {number} days
 *
 * @return {number}
 */
const ONE_DAY = 40;
const TREE_DAY = 3;
const SEVEN_DAY = 7;
const MIN_DESCOUNT = 20;
const MAX_DESCOUNT = 50;

function calculateRentalCost(days) {
  if (days >= SEVEN_DAY) {
    return ONE_DAY * days - MAX_DESCOUNT;
  }

  if (days >= TREE_DAY) {
    return ONE_DAY * days - MIN_DESCOUNT;
  }

  return days * ONE_DAY;
}

module.exports = calculateRentalCost;
