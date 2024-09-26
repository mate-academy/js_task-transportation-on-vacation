/**
 * @param {number} days
 *
 * @return {number}
 */
'use strict';

function calculateRentalCost(days) {
  const carRent = 40;
  const total = days * carRent;
  const MAX_OF_DAY = 7;
  const MIN_OF_DAY = 3;
  const MAX_SALE = 50;
  const MIN_SALE = 20;

  if (days >= MAX_OF_DAY) {
    return total - MAX_SALE;
  }

  if (days >= MIN_OF_DAY) {
    return total - MIN_SALE;
  }

  return total;
}

module.exports = calculateRentalCost;
