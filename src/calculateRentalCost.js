/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM_DAYS = 7;
  const MID_TERM_DAYS = 3;
  const DAILY_RATE = 40;
  const total = DAILY_RATE * days;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM_DAYS) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_DAYS) {
    return total - MID_TERM_DISCOUNT;
  }

  if (days > 0) {
    return total;
  }
}

module.exports = calculateRentalCost;
