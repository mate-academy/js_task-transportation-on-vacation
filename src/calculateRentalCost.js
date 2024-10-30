'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const discountLvl1 = 20;
  const discountLvl2 = 50;
  let total = days * price;

  if (days >= 3) {
    if (days >= 7) {
      total -= discountLvl2;
    } else {
      total -= discountLvl1;
    }
  }

  return total;
}

module.exports = calculateRentalCost;
