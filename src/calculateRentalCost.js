/**
 * @param {number} days
 *
 * @return {number}
 */
const BASE_PRICE_PER_DAY = 40;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DAYS = 3;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const price = days * BASE_PRICE_PER_DAY;

  if (days >= LONG_TERM_DAYS) {
    return price - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_DAYS) {
    return price - MID_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
