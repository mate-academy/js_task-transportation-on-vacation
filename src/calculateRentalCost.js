'use strict';

function calculateRentalCost(days) {
  const rent = 40;
  const smallDisc = 20;
  const bigDisc = 50;

  if (days < 3) {
    return days * 40;
  }

  if (days < 7) {
    return days * rent - smallDisc;
  }

  return days * rent - bigDisc;
}

module.exports = calculateRentalCost;
