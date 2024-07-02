/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_COST = 40;

  const LONG_TERM = 7;
  const MID_TERM = 3;

  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;

  const TOTAL = days * DAILY_COST;

  if (days >= LONG_TERM) {
    return TOTAL - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return TOTAL - MID_TERM_DISCOUNT;
  }

  return TOTAL;
}

module.exports = calculateRentalCost;
