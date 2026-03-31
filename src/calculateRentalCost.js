/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MIN_DAYS_FOR_DISCOUNT = 3;
  const BASIC_DISCOUNT = 20;
  const DAILY_RATE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const amountWithoutDiscount = days * DAILY_RATE;

  if (days < MIN_DAYS_FOR_DISCOUNT) {
    return amountWithoutDiscount;
  }

  if (days >= LONG_TERM) {
    return amountWithoutDiscount - LONG_TERM_DISCOUNT;
  }

  return amountWithoutDiscount - BASIC_DISCOUNT;
}

module.exports = calculateRentalCost;
