/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basePrice = 40;
  const numberOfDays = days;
  const DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (numberOfDays < 3) {
    return numberOfDays * basePrice;
  }

  if (numberOfDays >= 7) {
    return numberOfDays * basePrice - LONG_TERM_DISCOUNT;
  }

  return numberOfDays * basePrice - DISCOUNT;
}

module.exports = calculateRentalCost;
