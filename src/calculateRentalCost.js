/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const EVERY_DAY_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const basePrice = days * EVERY_DAY_PRICE;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return days * EVERY_DAY_PRICE;
}

module.exports = calculateRentalCost;
