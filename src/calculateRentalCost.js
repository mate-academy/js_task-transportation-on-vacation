/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RATE = 40;
  const MIN_DAYS_FOR_MEDIUM_DISCOUNT = 3;
  const MIN_DAYS_FOR_LONG_DISCOUNT = 7;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const totalCost = days * DAILY_RATE;

  if (days >= MIN_DAYS_FOR_LONG_DISCOUNT) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MIN_DAYS_FOR_MEDIUM_DISCOUNT) {
    return totalCost - MEDIUM_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
