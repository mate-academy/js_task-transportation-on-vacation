/**
 * @param {number} days
 *
 * @return {number}
 */

const DAY_COSTS = 40;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days < SHORT_TERM) {
    return days * DAY_COSTS;
  }

  if (days >= LONG_TERM) {
    return days * DAY_COSTS - LONG_TERM_DISCOUNT;
  }

  return days * DAY_COSTS - SHORT_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
