/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHOT_TERM = 3;
  const SHOT_TERM_DISCOUNT = 20;

  const BASE_PRICE = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return BASE_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHOT_TERM) {
    return BASE_PRICE - SHOT_TERM_DISCOUNT;
  }

  return BASE_PRICE;
}

module.exports = calculateRentalCost;
