'use strict';

function calculateRentalCost(days) {
  const rentPrice = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const smallDiscountBreakpoint = 3;
  const bigDiscountBreakpoint = 7;

  if (days < smallDiscountBreakpoint) {
    return days * rentPrice;
  }

  if (days < bigDiscountBreakpoint) {
    return days * rentPrice - smallDiscount;
  }

  return days * rentPrice - bigDiscount;
}

module.exports = calculateRentalCost;
