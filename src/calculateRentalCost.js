'use strict';

const DAILY_RENTAL_COST = 40;
const LONG_TERM_RENTAL_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MEDIUM_TERM_RENTAL_DAYS = 3;
const MEDIUM_TERM_DISCOUNT = 20;

/**
 * @param {number} numberOfDays
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const baseCost = numberOfDays * DAILY_RENTAL_COST;

  if (numberOfDays >= LONG_TERM_RENTAL_DAYS) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MEDIUM_TERM_RENTAL_DAYS) {
    return baseCost - MEDIUM_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
