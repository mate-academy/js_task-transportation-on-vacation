/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discount = 20;
  const maxDiscount = 50;
  const rentalCostWithoutDiscount = days * 40;
  const minDayForDiscount = 3;
  const week = 7;

  if (days < minDayForDiscount) {
    return rentalCostWithoutDiscount;
  }

  if (days < week) {
    return rentalCostWithoutDiscount - discount;
  }

  return rentalCostWithoutDiscount - maxDiscount;
}

module.exports = calculateRentalCost;
