'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCarRentalCost = 40;
  const discountForSevenDays = 50;
  const discountForThreeDays = 20;
  const minDaysLongTermDiscount = 7;
  const minDaysMidTermDiscount = 3;
  const totalAmount = dailyCarRentalCost * days;

  if (days >= minDaysLongTermDiscount) {
    return totalAmount - discountForSevenDays;
  }

  if (days >= minDaysMidTermDiscount) {
    return totalAmount - discountForThreeDays;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
