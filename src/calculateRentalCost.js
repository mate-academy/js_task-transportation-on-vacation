'use strict';

function calculateRentalCost(days) {
  if (days < 3) {
    return 40 * days;
  }

  if (days > 2 && days < 7) {
    return 40 * days - 20;
  }

  if (days > 6) {
    return 40 * days - 50;
  }
}

module.exports = calculateRentalCost;
