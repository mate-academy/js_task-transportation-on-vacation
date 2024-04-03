'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const pricePerDay = 40;
  const longTermDicount = 50;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const shortTerm = 3;
  const basePrice = days * pricePerDay;

  if (days >= longTerm) {
    return basePrice - longTermDicount;
  } else if (days >= shortTerm) {
    return basePrice - shortTermDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
