/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const BASIC_DISCOUNT_THRESHOLD = 3;
  const LONG_TERM_DISCOUNT_THRESHOLD = 7;
  const BASIC_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const cost = days * DAILY_RATE;

  if (days >= LONG_TERM_DISCOUNT_THRESHOLD) {
    return cost - LONG_TERM_DISCOUNT;
  }

  if (days >= BASIC_DISCOUNT_THRESHOLD) {
    return cost - BASIC_DISCOUNT;
  }

  return cost;
}
module.exports = calculateRentalCost;
