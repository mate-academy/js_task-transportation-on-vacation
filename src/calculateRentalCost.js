/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const PRICE = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return PRICE - MEDIUM_TERM_DISCOUNT;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
