'use strict';

function calculateRentalCost(days) {
  let totalCost = '0';
  const oneDayCost = 40;

  if (days < 3) {
    totalCost = days * oneDayCost;
  } else if (days >= 3 && days < 7) {
    totalCost = days * oneDayCost - 20;
  } else {
    totalCost = days * oneDayCost - 50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
