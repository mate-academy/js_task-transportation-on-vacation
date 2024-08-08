/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let result = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return result - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return result - SHORT_TERM_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
