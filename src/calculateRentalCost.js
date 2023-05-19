'use strict';

function calculateRentalCost(days) {
  const costPerDay = 40;
  const discountSinceThreeDays = 20;
  const discountSinceSevenDays = 50;

  if (days < 0) {
    return new Error('Invalid days value');
  }

  if (days < 3) {
    return days * costPerDay;
  }

  if (days < 7) {
    return days * costPerDay - discountSinceThreeDays;
  }

  return days * costPerDay - discountSinceSevenDays;
}

module.exports = calculateRentalCost;
