'use strict';

function calculateRentalCost(days) {
  const dailyPrice = 40;
  const longTermPeriod = 7;
  const longTermDiscount = 50;
  const shortTermPeriod = 3;
  const shortTermDiscount = 20;
  const totalCost = dailyPrice * days;

  if (days < shortTermPeriod) {
    return totalCost;
  }

  if (days < longTermPeriod) {
    return (totalCost - shortTermDiscount);
  }

  return totalCost - longTermDiscount;
}

module.exports = calculateRentalCost;
