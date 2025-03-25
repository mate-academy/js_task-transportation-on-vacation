/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;

  const sum = days * DAILY_RATE;

  if (days >= 7) {
    return sum - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return sum - MEDIUM_TERM_DISCOUNT;
  }

  return sum;
}

module.exports = calculateRentalCost;
