const PRICE_PER_DAY = 40;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = days * PRICE_PER_DAY;

  if (days >= 7) {
    return price - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return price - SHORT_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
