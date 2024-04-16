/**
 * @param {number} days
 *
 * @return {number}
 */
'use strict';

function calculateRentalCost(days) {
  const basePrice = days * 40;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return basePrice - longTermDiscount;
  }
  if (days < longTerm && days >= shortTerm) {
    return basePrice - shortTermDiscount;
  }
  if (days < shortTerm) {
    return basePrice;
  }
}

module.exports = calculateRentalCost;
