/**
 * @param {number} days
 *
 * @return {number}
 */
const MID_TERM_DAYS = 3;
const LONG_TERM_DAYS = 7;
const COST_PER_DAY = 40;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  if (days >= LONG_TERM_DAYS) {
    return days * COST_PER_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_DAYS) {
    return days * COST_PER_DAY - MID_TERM_DISCOUNT;
  }

  return days * COST_PER_DAY;
}

module.exports = calculateRentalCost;
