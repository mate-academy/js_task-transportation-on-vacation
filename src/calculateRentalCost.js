/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const totalPrice = days * PRICE_PER_DAY;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const BIG_DISC = 50;
  const SMALL_DISC = 20;

  if (days >= LONG_TERM) {
    return totalPrice - BIG_DISC;
  }

  if (days < LONG_TERM && days >= SHORT_TERM) {
    return totalPrice - SMALL_DISC;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
