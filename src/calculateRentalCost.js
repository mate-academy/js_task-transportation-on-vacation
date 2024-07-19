/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const basePrice = DAILY_PRICE * days;

  if (days >= 7) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
