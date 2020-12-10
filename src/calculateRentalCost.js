'use strict';

function calculateRentalCost(days) {
  const dailyPrice = 40;
  const longTermPeriod = 7;
  const longTermDiscount = 50;
  const shortTermPeriod = 3;
  const shortTermDiscount = 20;
  let totalCost = dailyPrice * days;

  if (days >= shortTermPeriod) {
    totalCost -= shortTermDiscount;

    if (days >= longTermPeriod) {
      return (totalCost - (longTermDiscount - shortTermDiscount));
    }
  }

  return totalCost;
}

module.exports = calculateRentalCost;
