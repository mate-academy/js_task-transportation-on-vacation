/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_COST = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const MID_TERM = 3;
  const total = days * DAILY_COST;

  if (days >= LONG_TERM) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return total - MID_TERM_DISCOUNT;
  }

  return total;
}
module.exports = calculateRentalCost;
