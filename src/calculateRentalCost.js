'use strict';

function calculateRentalCost(days) {
  const baseRate = 40;

  const discountSevenDays = 50;
  const discountThreeDays = 20;

  if (days >= 7) {
    return days * baseRate - discountSevenDays;
  } else if (days >= 3) {
    return days * baseRate - discountThreeDays;
  } else {
    return days * baseRate;
  }
}

module.exports = calculateRentalCost;
