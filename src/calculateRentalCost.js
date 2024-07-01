'use strict';

//
//  * @param {number} days
//
//  * @return {number}
//
function calculateRentalCost(days) {
  const REGULAR_PRICE = 40;
  const DISCOUNT_MID_TERM = 20;
  const DISCOUNT_LONG_TERM = 50;
  const LONG_TERM = 7;
  const MID_TERM = 3;

  if (days >= LONG_TERM) {
    return days * REGULAR_PRICE - DISCOUNT_LONG_TERM;
  }

  if (days >= MID_TERM) {
    return days * REGULAR_PRICE - DISCOUNT_MID_TERM;
  }

  return days * REGULAR_PRICE;
}

module.exports = calculateRentalCost;
