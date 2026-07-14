/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const GENERAL_RATE = days * DAILY_RATE;

  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return GENERAL_RATE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return GENERAL_RATE - SHORT_TERM_DISCOUNT;
  }

  return GENERAL_RATE;
}

module.exports = calculateRentalCost;
