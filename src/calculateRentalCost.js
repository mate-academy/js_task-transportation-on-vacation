'use strict';

function calculateRentalCost(days) {
  const dayRent = 40;
  let discount = 0;
  const minDiscount = 20;
  const maxDiscount = 50;
  const minDaysDiscount = 3;
  const maxDaysDiscount = 7;

  if (days >= maxDaysDiscount) {
    discount = maxDiscount;
  } else if (days >= minDaysDiscount) {
    discount = minDiscount;
  }

  return dayRent * days - discount;
}

module.exports = calculateRentalCost;
