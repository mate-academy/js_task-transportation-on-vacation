'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_FOR_DAY = 40;
  const LITTLE_DAYS = 3;
  const LITTLE_DISCOUNT = 20;
  const BIG_DAYS = 7;
  const BIG_DISCOUNT = 50;

  const TOTAL_COST = days * COST_FOR_DAY;

  if (days >= BIG_DAYS) {
    return TOTAL_COST - BIG_DISCOUNT;
  }

  if (days >= LITTLE_DAYS) {
    return TOTAL_COST - LITTLE_DISCOUNT;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
