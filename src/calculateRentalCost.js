/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const COST_PER_DAY = 40;
  const LONG_TERM_DAYS_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DAYS_THRESHOLD = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  const totalCost = days * COST_PER_DAY;

  if (days >= LONG_TERM_DAYS_THRESHOLD) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_DAYS_THRESHOLD) {
    return totalCost - MEDIUM_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
