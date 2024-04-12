/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SMALL_TERM = 3;
  const DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const PRICE_PER_DAY = 40;
  const price = days * PRICE_PER_DAY;

  if (days < SMALL_TERM) {
    return price;
  }

  return days < LONG_TERM ? price - DISCOUNT : price - BIG_DISCOUNT;
}

module.exports = calculateRentalCost;
