/**
 * @param {number} days
 *
 * @return {number}
 */

const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const DAILY_COST = 40;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return (DAILY_COST * days) - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return (DAILY_COST * days) - SHORT_TERM_DISCOUNT;
  }

  return (DAILY_COST * days);
}

module.exports = calculateRentalCost;
