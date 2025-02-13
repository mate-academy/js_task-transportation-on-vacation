'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const BASIC_DISCOUNT = 20;
  const BASIC_DAYS = 3;
  const EXTRA_DISCOUNT = 50;
  const EXTRA_DAYS = 7;

  const fullcost = days * PRICE;

  if (days >= EXTRA_DAYS) {
    return fullcost - EXTRA_DISCOUNT;
  }

  if (days >= BASIC_DAYS) {
    return fullcost - BASIC_DISCOUNT;
  }

  return fullcost;
}

module.exports = calculateRentalCost;
