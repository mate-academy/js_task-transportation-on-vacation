'use strict';

const DAILY_RENTAL_COST = 40;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const totalCost = days * DAILY_RENTAL_COST;

  // Apply discounts based on the number of days
  if (days >= 7) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return totalCost - MID_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
