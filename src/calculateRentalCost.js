/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RATE = 40;

const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;

const SHORT_TERM_DAYS = 3;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const baseTotal = days * DAILY_RATE;

  if (days >= LONG_TERM_DAYS) {
    return baseTotal - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return baseTotal - SHORT_TERM_DISCOUNT;
  }

  return baseTotal;
}
module.exports = calculateRentalCost;
