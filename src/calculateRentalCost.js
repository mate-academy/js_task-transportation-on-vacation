/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DAYS = 3;
  const MID_TERM_DISCOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_DAYS) {
    return basePrice - MID_TERM_DISCOUNT; // write code here
  }

  return basePrice;
}

module.exports = calculateRentalCost;
