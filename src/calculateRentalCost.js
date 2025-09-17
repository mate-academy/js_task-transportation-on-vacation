/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;
const MID_TERM_DAYS = 3;
const LONG_TERM_DAYS = 7;

const MID_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const basePrice = days * DAILY_RATE;

  if (days >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_DAYS) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  return basePrice;
}
module.exports = calculateRentalCost;
