'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const shortTerm = 3;
  const shortDiscount = 20;
  const longTerm = 7;
  const longDiscount = 50;
  const priceBeforeDiscount = price * days;

  if (days >= longTerm) {
    return priceBeforeDiscount - longDiscount;
  }

  if (days >= shortTerm) {
    return priceBeforeDiscount - shortDiscount;
  }

  return priceBeforeDiscount;
}

module.exports = calculateRentalCost;
