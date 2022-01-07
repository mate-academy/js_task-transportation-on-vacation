'use strict';

function calculateRentalCost(days) {
  let result = 0;
  const rentCostPerDay = 40;
  const threeDays = 3;
  const sevenDays = 7;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const rentCost = rentCostPerDay;

  if (days > 0 && days < threeDays) {
    result = rentCost * days;
    return result;
  } else if (days >= threeDays && days < sevenDays) {
    result = rentCost * days - smallDiscount;
    return result;
  } else if (days >= sevenDays) {
    result = rentCost * days - bigDiscount;
    return result;
  }
}
module.exports = calculateRentalCost;
