'use strict';

function calculateRentalCost(days) {
  let cost = 40 * days;
  const discount1 = 20;
  const discount2 = 50;
  const discountDays1 = 3;
  const discountDays2 = 7;

  if (days >= discountDays1 && days < discountDays2) {
    cost -= discount1;
  } else if (days >= discountDays2) {
    cost -= discount2;
  }

  return cost;
}

module.exports = calculateRentalCost;
