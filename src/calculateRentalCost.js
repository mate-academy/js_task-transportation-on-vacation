/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DISCOUNT = 20;
const MID_TERM_THRESHOLD = 3;
const LONG_TERM_THRESHOLD = 7;

function calculateRentalCost(days) {
  const basePrice = days * DAILY_RATE;

  if (days >= LONG_TERM_THRESHOLD) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_THRESHOLD) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
