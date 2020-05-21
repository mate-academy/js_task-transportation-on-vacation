'use strict';

function calculateRentalCost(days) {
  const dayRent = 40;
  let discount = 0;

  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }

  return dayRent * days - discount;
}

module.exports = calculateRentalCost;
