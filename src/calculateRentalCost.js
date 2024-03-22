'use strict';

function calculateRentalCost(days) {
  const RentalCostday = 40;
  const Discount3DaysOrMore = 20;
  const Discount7DaysOrMore = 50;
  let totalCost = days * RentalCostday;

  if (days ===1) {
    return RentalCostday;
  }

  if (days >= 3 && days <= 7) {
   totalCost -= Discount3DaysOrMore;
  }
  if (days >= 7) {
    totalCost-= Discount7DaysOrMore;
  }
  return totalCost;
}
module.exports = calculateRentalCost;
