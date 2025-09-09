/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const DAILY_RATE = 40;

  const MID_TERM_DAYS = 3;
  const MID_TERM_DISCOUNT = 20;

  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM_DAYS) return days * DAILY_RATE - LONG_TERM_DISCOUNT;
  if (days >= MID_TERM_DAYS) return days * DAILY_RATE - MID_TERM_DISCOUNT;
  return days * DAILY_RATE;
}

module.exports = calculateRentalCost;
