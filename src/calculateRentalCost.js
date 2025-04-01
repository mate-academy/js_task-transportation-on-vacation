/**
 * @param {number} days
 *
 * @return {number}
 */
const DALI_RATE = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TEAM = 3;
const SHORT_TEAM_DISCOUN = 20;

function calculateRentalCost(days) {
  // write code here
  if (days >= LONG_TERM) {
    return DALI_RATE * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TEAM) {
    return DALI_RATE * days - SHORT_TEAM_DISCOUN;
  }

  return DALI_RATE * days;
}

module.exports = calculateRentalCost;
