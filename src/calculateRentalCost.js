'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentalCost = 0;
  const sevenDaysDiscount = 50;
  const threeDaysDiscount = 20;
  const dayCosts = 40;

  if (days >= 7) {
    rentalCost = days * dayCosts - sevenDaysDiscount;
  }

  if (days >= 3 && days < 7) {
    rentalCost = days * dayCosts - threeDaysDiscount;
  }

  if (days <= 2) {
    rentalCost = days * dayCosts;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
