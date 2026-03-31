/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const MID_TERM = 3;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TEM_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= MID_TERM && days < LONG_TERM) {
    return basePrice - MID_TEM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
