/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDLE_TERM = 3;
  const MIDLE_TERM_DISCOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDLE_TERM) {
    return basePrice - MIDLE_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
