'use strict';

function calculateRentalCost(days) {
  const tax3 = 20;
  const tax7 = 50;
  const price = 40;

  if (days < 3) {
    return price * days;
  }

  if (days > 2 && days < 7) {
    return price * days - tax3;
  }

  if (days > 6) {
    return price * days - tax7;
  }
}

module.exports = calculateRentalCost;
