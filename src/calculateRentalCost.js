/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const numberOfDays = days;
  const basePrice = numberOfDays * 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const REGULAR_TERM = 3;
  const REGULAR_TERM_DISCOUNT = 20;

  if (numberOfDays >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= REGULAR_TERM) {
    return basePrice - REGULAR_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
