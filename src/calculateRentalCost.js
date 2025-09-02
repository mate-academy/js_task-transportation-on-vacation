/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RATE = 40;
  const LONG_TERM_THRESHOLD = 7;
  const MID_TERM_THRESHOLD = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;

  const baseCost = days * DAILY_RATE;

  if (days >= LONG_TERM_THRESHOLD) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_THRESHOLD) {
    return baseCost - MID_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
