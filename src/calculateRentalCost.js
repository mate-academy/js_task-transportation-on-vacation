/**
 * @param {number} days
 *
 * @return {number}
 */

const LONG_TERM = 7;
const MID_TERM = 3;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const basePrice = 40 * days;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  } else if (days >= MID_TERM) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
