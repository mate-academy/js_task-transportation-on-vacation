/**
 * @param {number} days
 *
 * @return {number}
 */

const RENT_CAR_COST_PER_DAY = 40;
const SHORT_TERM = 3;
const LONG_TERM = 7;
const LOW_DISCOUNT = 20;
const HIGH_DISCOUNT = 50;

function calculateRentalCost(days) {
  const TOTAL_COST = days * RENT_CAR_COST_PER_DAY;

  if (days < SHORT_TERM) {
    return TOTAL_COST;
  } else if (days < LONG_TERM) {
    return TOTAL_COST - LOW_DISCOUNT;
  } else {
    return TOTAL_COST - HIGH_DISCOUNT;
  }

  // write code here
}

module.exports = calculateRentalCost;
