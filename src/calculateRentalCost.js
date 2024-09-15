/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const BASIC_PRICE = days * PRICE_PER_DAY;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  if (days < SHORT_TERM) {
    return BASIC_PRICE;
  }

  return days >= LONG_TERM
    ? BASIC_PRICE - LONG_TERM_DISCOUNT
    : BASIC_PRICE - SHORT_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
