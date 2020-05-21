'use strict';

function calculateRentalCost(days) {
  const dayCost = 40;
  const daysDiscountSmall = 3;
  const daysDiscountBig = 7;
  const discountSmall = 20;
  const discountBig = 50;

  if (days < daysDiscountSmall) {
    return days * dayCost;
  } else if (days >= daysDiscountSmall && days < daysDiscountBig) {
    return days * dayCost - discountSmall;
  } else if (days >= daysDiscountBig) {
    return days * dayCost - discountBig;
  }
}

module.exports = calculateRentalCost;
