/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const PRICE_PER_DAY = 40;
  const basePrice = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
