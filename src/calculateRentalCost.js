/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const SHORT_TERM_DISCOUNT = 0;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_MIN_DAYS = 3;
  const LONG_TERM_MIN_DAYS = 7;

  if (days <= 0) {
    return 0;
  }

  const baseCost = DAILY_RATE * days;

  if (days >= LONG_TERM_MIN_DAYS) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_MIN_DAYS) {
    return baseCost - MEDIUM_TERM_DISCOUNT;
  }

  return baseCost - SHORT_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
