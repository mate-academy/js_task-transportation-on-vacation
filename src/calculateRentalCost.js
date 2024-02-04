"use strict";
const DayPrice = 40;
const SmallDiscount = 20;
const BigDiscount = 50;

function calculateRentalCost(days) {
  let rentalCost = DayPrice * days; //The total cost without any discounts
  if (days >= 7) {
    rentalCost -= BigDiscount; //The big discount if renting 7 or more days
  } else if (days >= 3) {
    rentalCost -= SmallDiscount; //The small discount if renting 3 or more days
  }
  return rentalCost;
}
module.exports = calculateRentalCost;
