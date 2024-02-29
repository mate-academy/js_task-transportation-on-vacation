/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const price = days * 40;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return price - SMALL_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return price - BIG_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
