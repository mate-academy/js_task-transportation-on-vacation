/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * PRICE_PER_DAY - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * PRICE_PER_DAY - SMALL_DISCOUNT;
  }

  return days * PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
