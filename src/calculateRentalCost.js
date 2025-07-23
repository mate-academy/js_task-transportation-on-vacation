'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const longTerm = 7;
  const midTerm = 3;
  const midTermDiscount = 20;
  const longTermDiscount = 50;

  if (days < midTerm) {
    return days * basePrice;
  }

  if (days < longTerm) {
    return days * basePrice - midTermDiscount;
  }

  if (days >= longTerm) {
    return days * basePrice - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
