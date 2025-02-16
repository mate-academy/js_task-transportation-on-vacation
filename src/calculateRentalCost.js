/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const minDaysForDiscount = 3;
  const maxDaysForDiscount = 7;
  const baseDiscountAmount = 20;
  const largeDiscountAmount = 50;
  const dailyRentalRate = 40;
  const standartRentalCost = days * dailyRentalRate;

  if (days < minDaysForDiscount) {
    return standartRentalCost;
  }

  if (days < maxDaysForDiscount) {
    return standartRentalCost - baseDiscountAmount;
  }

  if (days >= maxDaysForDiscount) {
    return standartRentalCost - largeDiscountAmount;
  }
}

module.exports = calculateRentalCost;
