/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const DAILY_COST = 40;
  const MIN_DAYS_FOR_SHORT_TERM_DISCOUNT = 3;
  const MIN_DAYS_FOR_LONG_TERM_DISCOUNT = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const totalCost = days * DAILY_COST;

  if (days >= MIN_DAYS_FOR_LONG_TERM_DISCOUNT) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MIN_DAYS_FOR_SHORT_TERM_DISCOUNT) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
