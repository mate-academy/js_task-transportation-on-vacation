/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_FOR_DAY = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  const price = days * PRICE_FOR_DAY;

  if (days >= LONG_TERM) {
    return price - BIG_DISCOUNT;
  }
  if (days >= SHORT_TERM) {
    return price - SMALL_DISCOUNT;
  }

  return price;

}

module.exports = calculateRentalCost;
