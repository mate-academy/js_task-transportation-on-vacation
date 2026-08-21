/**
 * @param {number} days
 *
 * @return {number}
 */

'use strict';

function calculateRentalCost(days) {
  const oneDayCost = 40;
  const longRent = 7;
  const longRentDiscount = 50;
  const shortRent = 3;
  const shortRentDiscount = 20;

  const rentCosts = days * oneDayCost;

  if (days >= longRent) {
    return rentCosts - longRentDiscount;
  }

  if (days >= shortRent && days < longRent) {
    return rentCosts - shortRentDiscount;
  }

  return rentCosts;
}

module.exports = calculateRentalCost;
