/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM = 7;
  const MEDIUM_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * DAILY_RATE - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return days * DAILY_RATE - MEDIUM_TERM_DISCOUNT;
  }

  return days * DAILY_RATE;
}

module.exports = calculateRentalCost;
