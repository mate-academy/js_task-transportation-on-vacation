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
  let rentalCost;

  if (days < 3) {
    rentalCost = rentalCostWithoutDiscount;
  } else if (days >= 3 && days < 7) {
    rentalCost = rentalCostWithoutDiscount - threeDaysDiscount;
  } else {
    rentalCost = rentalCostWithoutDiscount - sevenDaysDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
