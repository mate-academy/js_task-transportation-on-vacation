'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  
  const PRICE_PER_DAY = 40;
  const DISCOUNT_3_TO_6_DAYS = 20;
  const DISCOUNT_7_PLUS_DAYS = 50;
  let carRentalAmount = days * PRICE_PER_DAY;

  if (typeof days !== 'number' || days < 1) {
    return 0;
  }

  if (days >= 7) {
    carRentalAmount -= DISCOUNT_7_PLUS_DAYS;
  } else if (days >= 3) {
    carRentalAmount -= DISCOUNT_3_TO_6_DAYS;
  }

  return carRentalAmount;
}

module.exports = calculateRentalCost;
