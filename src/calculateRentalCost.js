/**
 * @param {number} days
 *
 * @return {number}
 */
const BASE_DAY_COST = 40;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const baseCost = BASE_DAY_COST * days;

  if (days < SHORT_TERM) {
    return baseCost;
  }

  if (days < LONG_TERM) {
    return baseCost - SHORT_TERM_DISCOUNT;
  }

  return baseCost - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
