/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;

  const SHORT_TERM_MIN_DAYS = 3;
  const SHORT_TERM_MAX_DAYS = 6;

  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days < SHORT_TERM_MIN_DAYS) {
    return DAILY_RATE * days;
  }

  if (days <= SHORT_TERM_MAX_DAYS) {
    return DAILY_RATE * days - SHORT_TERM_DISCOUNT;
  }

  return DAILY_RATE * days - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
