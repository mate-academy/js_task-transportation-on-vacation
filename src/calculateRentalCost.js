'use strict';

function calculateRentalCost(days) {
  const dayCost = 40;
  const daysForSmallDiscount = 3;
  const daysForBigDiscount = 7;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days < daysForSmallDiscount) {
    return days * dayCost;
  } else if (days >= daysForSmallDiscount && days < daysForBigDiscount) {
    return days * dayCost - smallDiscount;
  } else if (days >= daysForBigDiscount) {
    return days * dayCost - bigDiscount;
  }
}

module.exports = calculateRentalCost;
