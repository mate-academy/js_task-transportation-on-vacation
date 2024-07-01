'use strict';

//
//  * @param {number} days
//
//  * @return {number}
//
function calculateRentalCost(days) {
  const regularPrice = 40;

  if (days >= 7) {
    return days * regularPrice - 50;
  } else if (days >= 3) {
    return days * regularPrice - 20;
  } else {
    return days * regularPrice;
  }
}

module.exports = calculateRentalCost;
