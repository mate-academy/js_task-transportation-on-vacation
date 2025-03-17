/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RATE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days >= 7) {
    return days * DAILY_RATE - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return days * DAILY_RATE - MEDIUM_TERM_DISCOUNT;
  }

  return days * DAILY_RATE;
}

module.exports = calculateRentalCost;
