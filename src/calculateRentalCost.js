/**
 * @param {number} days
 *
 * @return {number}
 */
const COST_PER_DAY = 40;
const MID_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM = 3;
const LONG_TERM = 7;

function calculateRentalCost(days) {
  // write code here
  const FULL_PRICE = COST_PER_DAY * days;

  if (days >= LONG_TERM) {
    return FULL_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return FULL_PRICE - MID_TERM_DISCOUNT;
  }

  return FULL_PRICE;
}

module.exports = calculateRentalCost;
