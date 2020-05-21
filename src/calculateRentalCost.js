'use strict';

function calculateRentalCost(days) {
  let cost = 40 * days;

  days > 2 && (cost -= 20);
  days > 6 && (cost -= 30);

  return cost;
}

module.exports = calculateRentalCost;
