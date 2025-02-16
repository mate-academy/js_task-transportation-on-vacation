/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days === 0) {
    return 0;
  }

  const PRICE_PER_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const STANDART_PRICE = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return STANDART_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return STANDART_PRICE - SHORT_TERM_DISCOUNT;
  }

  return STANDART_PRICE;
}

module.exports = calculateRentalCost;
