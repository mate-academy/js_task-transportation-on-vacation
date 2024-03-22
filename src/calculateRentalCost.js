'use strict';

function calculateRentalCost(days) {
  const RentalCostday = 40;
  const Discount3DaysMore = 20;
  const Discount7DaysMore = 50;
  let totalCost = days * RentalCostday;

  if (days ===1) {
    return RentalCostday;
  }

  if (days >= 3 & days <= 7) {
   totalCost -= Discount3DaysMore;
  }
  if (days >= 7) {
    totalCost-= Discount7DaysMore;
  }
  return totalCost;
}
module.exports = calculateRentalCost;
