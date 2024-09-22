/**
 * @param {number} days
 *
 * @return {number}
 */

const LONG_TERM = 7;
const MID_TERM = 3;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DISCOUNT = 20;
const BASE_PRICE = 40;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return BASE_PRICE * days - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return BASE_PRICE * days - MID_TERM_DISCOUNT;
  }

  return BASE_PRICE * days;
}

module.exports = calculateRentalCost;
