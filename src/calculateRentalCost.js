/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DAYS_PAYMENT = DAILY_RATE * days;
  const MIDDLE_TERM = 3;
  const MIDLL_TERM_DISCOUNT = DAYS_PAYMENT - 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = DAYS_PAYMENT - 50;

  if (days >= LONG_TERM) {
    return LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return MIDLL_TERM_DISCOUNT;
  }

  return DAYS_PAYMENT;
}

module.exports = calculateRentalCost;
