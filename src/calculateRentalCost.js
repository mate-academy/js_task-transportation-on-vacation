/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const total = days * PRICE_PER_DAY;
  const LOGN_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LOGN_TERM) {
    return total - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return total - SHORT_TERM_DISCOUNT;
  } else {
    return total;
  }
}

module.exports = calculateRentalCost;
