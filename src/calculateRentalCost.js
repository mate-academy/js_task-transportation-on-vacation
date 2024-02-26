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

  const baseResult = days * BASE_PRICE_OF_RENT;

  if (days >= 3 && days <= 6) {
    return baseResult - DISCOUNT_THREE_DAYS;
  }

  if (days >= 7) {
    return baseResult - DISCOUNT_SEVEN_DAYS;
  }

  return baseResult;
}

module.exports = calculateRentalCost;
