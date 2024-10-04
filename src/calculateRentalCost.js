/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const BASE_PRICE_PER_DAY = 40;
  let rentAmount = days * BASE_PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return rentAmount - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return rentAmount - SHORT_TERM_DISCOUNT;
  }

  return rentAmount;
}

module.exports = calculateRentalCost;
