/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_ONE_DAY = 40;
  const LONG_TERM = 7;
  const BIG_DISCOUNT = 50;
  const SMALL_TERM = 3;
  const LITTLE_DISCOUNT = 20;
  const TOTAL_PRICE = days * PRICE_ONE_DAY;

  if (days >= LONG_TERM) {
    return TOTAL_PRICE - BIG_DISCOUNT;
  }

  if (days >= SMALL_TERM) {
    return TOTAL_PRICE - LITTLE_DISCOUNT;
  }

  return TOTAL_PRICE;
}

module.exports = calculateRentalCost;
