'use strict';

function calculateRentalCost(days) {
  const RentalCostdays1 = 1;
  const price1 = 40;
  if (days === RentalCostdays1) {
    return price1;
  }
  const RentalCostdays2 = 3;
  const price2 = 100;

  if (days === RentalCostdays2) {
    return price2;
  }
  const RentalCostdays3 = 7;
  const price3 = 230;
  if (days === RentalCostdays3) {
    return price3;
  }
}
module.exports = calculateRentalCost;
