/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;

  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;

  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const basePrice = days * DAILY_PRICE;

  if (days >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
