'use strict';
/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const lowDays = 3;
  const middleDays = 6;
  const withoutDescont = 40;
  const lowDescont = 20;
  const highDescont = 50;

  if (days < lowDays) {
    return days * withoutDescont;
  }

  if (days >= lowDays && days <= middleDays) {
    return days * withoutDescont - lowDescont;
  }

  return days * withoutDescont - highDescont;
}

module.exports = calculateRentalCost;
