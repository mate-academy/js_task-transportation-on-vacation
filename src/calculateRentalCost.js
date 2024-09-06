/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_DAY = 40;
  const price = days * PRICE_DAY;
  const DISCOUNT_LONG = 50;
  const DISCOUNT_SHORT = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  if (days >= LONG_TERM) {
    return price - DISCOUNT_LONG;
  }

  if (days >= SHORT_TERM) {
    return price - DISCOUNT_SHORT;
  }

  return price;
}

module.exports = calculateRentalCost;
