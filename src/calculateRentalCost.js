/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_PRICE = 40;
const LONG_TERM_THRESHOLD = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_THRESHOLD = 3;
const SHORT_TERM_DISCOUNT = 20;

/**
 * @param {number} days
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = days * DAILY_PRICE;

  if (days >= LONG_TERM_THRESHOLD) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_THRESHOLD) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
