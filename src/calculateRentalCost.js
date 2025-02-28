'use_strict';

const RENT_COST = 40;
const SHORT_TERM = 3;
const DISCOUNT_SHORT = 20;
const LONG_TERM = 7;
const DISCOUNT_LONG = 50;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = RENT_COST * days;

  if (days >= LONG_TERM) {
    return totalCost - DISCOUNT_LONG;
  }

  if (days >= SHORT_TERM) {
    return totalCost - DISCOUNT_SHORT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
