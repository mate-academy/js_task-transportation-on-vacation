'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAY_COST = 40;
  const MANY_DAYS = 7;
  const SOME_DAYS = 3;
  const MANY_DAYS_DISCOUNT = 50;
  const FEW_DAYS_DISCOUNT = 20;

  const daysCost = DAY_COST * days;

  if (days >= MANY_DAYS) {
    return daysCost - MANY_DAYS_DISCOUNT;
  }

  if (days >= SOME_DAYS) {
    return daysCost - FEW_DAYS_DISCOUNT;
  }

  return daysCost;
}

module.exports = calculateRentalCost;
