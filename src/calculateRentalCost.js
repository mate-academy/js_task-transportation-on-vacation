/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const total = DAILY_RENT * days;

  if (days < SHORT_TERM) {
    return total;
  }

  if (days < LONG_TERM) {
    return total - SHORT_TERM_DISCOUNT;
  }

  return total - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
