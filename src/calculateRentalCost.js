/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const baseDailyRate = 40;
  const LONG_TERM_THRESHOLD = 7;
  const MID_TERM_THRESHOLD = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM_THRESHOLD) {
    return days * baseDailyRate - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_THRESHOLD) {
    return days * baseDailyRate - MID_TERM_DISCOUNT;
  }

  return days * baseDailyRate;
}

module.exports = calculateRentalCost;
