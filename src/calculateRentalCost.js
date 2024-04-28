/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;
const LONG_TERM_DAYS = 7;
const MID_TERM_DAYS = 3;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const totalCost = days * DAILY_RATE;

  if (days >= LONG_TERM_DAYS) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_DAYS) {
    return totalCost - MID_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
