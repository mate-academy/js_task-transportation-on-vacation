/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const price = days * DAILY_PRICE;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < SHORT_TERM) {
    return price;
  }

  if (days < LONG_TERM) {
    return price - SHORT_TERM_DISCOUNT;
  }

  return price - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
