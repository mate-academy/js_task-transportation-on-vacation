/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_FOR_DAY = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  const BIG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const totalCost = days * PRICE_FOR_DAY;

  if (days >= LONG_TERM) {
    return totalCost - BIG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
