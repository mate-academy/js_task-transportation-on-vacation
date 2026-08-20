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

  let rentCosts = days * oneDayCost;

  if (days >= longRent) {
    rentCosts -= longRentDiscount;
  }

  if (days >= shortRent && days < longRent) {
    rentCosts -= shortRentDiscount;
  }

  return rentCosts;
}

module.exports = calculateRentalCost;
