'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;

  const shortTerm = 3;

  const longTerm = 7;

  const shortTermDiscount = 20;

  const longTermDiscount = 50;

  let totalCost = 0;

  if (days < shortTerm) {
    totalCost = days * dailyRate;

    return totalCost;
  }

  if (days >= shortTerm && days < longTerm) {
    totalCost = days * dailyRate - shortTermDiscount;

    return totalCost;
  }

  if (days >= longTerm) {
    totalCost = days * dailyRate - longTermDiscount;

    return totalCost;
  }
}

module.exports = calculateRentalCost;
