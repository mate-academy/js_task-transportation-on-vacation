/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM = 3;
  const LONG_TERM = 7;

  const totalPrice = days * PRICE_PER_DAY;

  if (days >= MID_TERM && days < LONG_TERM) {
    return totalPrice - MID_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
