'use strict';

function calculateRentalCost(days) {
  const dayRent = 40;
  let discount = 0;
  const minDiscount = 20;
  const maxDiscount = 20;
  const minDaysDiscount = 20;
  const maxDaysDiscount = 20;

  if (days >= maxDaysDiscount) {
    discount = maxDiscount;
  } else if (days >= minDaysDiscount) {
    discount = minDiscount;
  }

  return dayRent * days - discount;
}

module.exports = calculateRentalCost;
