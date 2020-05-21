'use strict';

function calculateRentalCost(days) {
  let cost = 40 * days;
  const discount1 = 20;
  const discount2 = 50;

  if (days > 2 && days < 7) {
    cost -= discount1;
  } else if (days > 6) {
    cost -= discount2;
  }

  return cost;
}

module.exports = calculateRentalCost;
