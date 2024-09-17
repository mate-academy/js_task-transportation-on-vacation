/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const MID_TERM = 3;
  const LONG_TERM = 7;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const basicPrice = PRICE * days;

  if (days >= MID_TERM && days < LONG_TERM) {
    return basicPrice - MID_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return basicPrice - LONG_TERM_DISCOUNT;
  }

  return basicPrice;
}

module.exports = calculateRentalCost;
