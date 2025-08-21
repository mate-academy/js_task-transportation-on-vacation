/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const MEDIUM_TERM_THRESHOLD = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const totalCost = DAILY_RATE * days;

  if (days >= LONG_TERM_THRESHOLD) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_THRESHOLD) {
    return totalCost - MEDIUM_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
