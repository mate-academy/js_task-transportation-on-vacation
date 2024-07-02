'use strict';

//
//  * @param {number} days
//
//  * @return {number}
//
function calculateRentalCost(days) {
  const REGULAR_PRICE = 40;
  const REGULAR_PRICE_TOTAL = days * REGULAR_PRICE;
  const MID_TERM = 3;
  const LONG_TERM = 7;
  const DISCOUNT_MID_TERM = 20;
  const DISCOUNT_LONG_TERM = 50;

  if (days >= LONG_TERM) {
    return REGULAR_PRICE_TOTAL - DISCOUNT_LONG_TERM;
  }

  if (days >= MID_TERM) {
    return REGULAR_PRICE_TOTAL - DISCOUNT_MID_TERM;
  }

  return REGULAR_PRICE_TOTAL;
}

module.exports = calculateRentalCost;
