/**
 * @param {number} days
 *
 * @return {number}
 */
const BASE_PRICE = 40;
const MID_TERM_DAYS = 3;
const LONG_TERM_DAYS = 7;
const MID_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days >= LONG_TERM_DAYS) {
    return days * BASE_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_DAYS) {
    return days * BASE_PRICE - MID_TERM_DISCOUNT;
  }

  return days * BASE_PRICE;
}

module.exports = calculateRentalCost;
