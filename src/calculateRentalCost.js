'use strict';

function calculateRentalCost(days) {
  const pricePerDay = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days < 3) {
    return days * pricePerDay;
  };

  if (days >= 3 && days < 7) {
    return days * pricePerDay - smallDiscount;
  };

  return days * pricePerDay - bigDiscount;
}
module.exports = calculateRentalCost;
