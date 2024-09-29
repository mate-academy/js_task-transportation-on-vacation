/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;
  const PAY_FOR_DAYS = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return PAY_FOR_DAYS - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return PAY_FOR_DAYS - SHORT_TERM_DISCOUNT;
  }

  return PAY_FOR_DAYS;
}

module.exports = calculateRentalCost;
