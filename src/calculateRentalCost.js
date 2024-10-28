/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const bestPrice = days * PRICE;

  if (days >= LONG_TERM) {
    return bestPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return bestPrice - SHORT_TERM_DISCOUNT;
  }

  return bestPrice;
}

module.exports = calculateRentalCost;
