/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASIC_PRICE_DAY = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_COUPON = 50;
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_COUPON = 20;
  const basePrice = days * BASIC_PRICE_DAY;

  if (days >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_COUPON;
  }

  if (days >= SHORT_TERM_DAYS) {
    return basePrice - SHORT_TERM_COUPON;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
