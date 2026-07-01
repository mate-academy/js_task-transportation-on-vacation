/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_THRESHOLD = 3;
  const MID_TERM_DISCOUNT = 20;

  const total = days * DAILY_RATE;

  if (days >= LONG_TERM_THRESHOLD) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_THRESHOLD) {
    return total - MID_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
