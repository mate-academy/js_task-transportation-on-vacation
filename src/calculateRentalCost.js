/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentPricePerDay = 40;
  const rentalCostWithoutDiscount = days * rentPricePerDay;
  const threeDaysDiscount = 20;
  const sevenDaysDiscount = 50;
  const minDiscountPeriod = 3;
  const maxDiscountPeriod = 7;
  let rentalCost;

  if (days < minDiscountPeriod) {
    rentalCost = rentalCostWithoutDiscount;
  } else if (days >= minDiscountPeriod && days < maxDiscountPeriod) {
    rentalCost = rentalCostWithoutDiscount - threeDaysDiscount;
  } else {
    rentalCost = rentalCostWithoutDiscount - sevenDaysDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
