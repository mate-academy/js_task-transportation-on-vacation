/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;

  let price = days * PRICE_PER_DAY;

  if (days >= SHORT_TERM) {
    return price - SHORT_TERM_DISCOUNT;
  }
  if (days >= LONG_TERM) {
    return price - LONG_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
