/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SMALL_TERM = 3;
  const DAY_RENT = 40;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;

  const bestPrice = days * DAY_RENT;

  if (days < SMALL_TERM) {
    return bestPrice;
  }

  if (days < LONG_TERM) {
    return bestPrice - SMALL_DISCOUNT;
  }

  return bestPrice - BIG_DISCOUNT;
}
module.exports = calculateRentalCost;
