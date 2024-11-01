'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePriceOfDay = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const TermDiscount = 20;
  const basePrice = days * basePriceOfDay;

  // write code here
  if (days >= longTerm) {
    return basePrice - longTermDiscount;
  } else if (days < 3) {
    return basePrice;
  } else if (days < longTerm) {
    return basePrice - TermDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
