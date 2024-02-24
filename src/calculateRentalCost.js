/**
 * @param {number} days
 *
 * @return {number}
 */
'use strict';

function calculateRentalCost(days) {
  const pricePerDay = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  const basePrices = days * pricePerDay;

  if (days >= longTerm) {
    return basePrices - longTermDiscount;
  }

  if (days >= shortTerm) {
    return basePrices - shortTermDiscount;
  }

  return basePrices;
}

module.exports = calculateRentalCost;
