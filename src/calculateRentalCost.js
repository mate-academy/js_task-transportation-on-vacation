'use strict';

function calculateRentalCost(days) {
  let totalSum = days * 40;

  if (days >= 3 && days < 7) {
    totalSum -= 20;
  };

  if (days >= 7) {
    totalSum -= 50;
  };

  return totalSum;
};

module.exports = calculateRentalCost;
