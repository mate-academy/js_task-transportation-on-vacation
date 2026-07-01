/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RATE = 40;
const MID_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days < 3) {
    return days * DAILY_RATE;
  }

  if (days >= 3 && days <= 6) {
    return days * DAILY_RATE - MID_TERM_DISCOUNT;
  }

  return days * DAILY_RATE - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
