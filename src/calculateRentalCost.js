/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const totalCost = days * DAILY_RATE;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DAYS = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM_DAYS) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_DAYS) {
    return totalCost - MEDIUM_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
