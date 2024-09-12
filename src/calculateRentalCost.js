'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  // write code here
  const DISCOUNT_SEVEN_DAYS = 50;
  const DISCOUNT_THREE_DAYS = 20;
  const BASE_PRICE_OF_RENT = 40;

  const LONG_TERM = 7;
  const LOW_TERM = 3;
  const MIDDLE_TERM = 6;

  const baseResult = days * BASE_PRICE_OF_RENT;

  if (days >= LOW_TERM && days <= MIDDLE_TERM) {
    return baseResult - DISCOUNT_THREE_DAYS;
  }

  if (days >= LONG_TERM) {
    return baseResult - DISCOUNT_SEVEN_DAYS;
  }

  return baseResult;
}

module.exports = calculateRentalCost;
