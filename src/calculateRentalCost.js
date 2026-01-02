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

  if (days < shortTerm) {
    return days * dailyRate;
  }

  if (days >= shortTerm && days < longTerm) {
    return days * dailyRate - shortTermDiscount;
  }

  if (days >= longTerm) {
    return days * dailyRate - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
