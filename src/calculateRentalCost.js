/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_PRICE = 40;
  const DAYS = days;
  const price = ONE_DAY_PRICE * DAYS;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (DAYS >= LONG_TERM) {
    return price - LONG_TERM_DISCOUNT;
  }

  if (DAYS >= SHORT_TERM) {
    return price - SHORT_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
