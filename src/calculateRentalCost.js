/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const numberOfDays = days;
  const PRICE = 40;

  const LONG_TERM = 7;
  const MEDIUM_TERM = 3;

  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;

  const basePrice = numberOfDays * PRICE;

  if (numberOfDays >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MEDIUM_TERM) {
    return basePrice - MEDIUM_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
