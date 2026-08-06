/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DAYS_PAYMENT = DAILY_RATE * days;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT_AMOUNT = 20;
  const MIDDLE_TERM_DISCOUNT = DAYS_PAYMENT - MIDDLE_TERM_DISCOUNT_AMOUNT;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT_AMOUNT = 50;
  const LONG_TERM_DISCOUNT = DAYS_PAYMENT - LONG_TERM_DISCOUNT_AMOUNT;

  if (days >= LONG_TERM) {
    return LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return MIDDLE_TERM_DISCOUNT;
  }

  return DAYS_PAYMENT;
}

module.exports = calculateRentalCost;
