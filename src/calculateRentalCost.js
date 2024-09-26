/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const PRICE_PER_DAY = 40;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const FINAL_PRICE = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return FINAL_PRICE - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return FINAL_PRICE - SMALL_DISCOUNT;
  }

  return FINAL_PRICE;
}

module.exports = calculateRentalCost;
