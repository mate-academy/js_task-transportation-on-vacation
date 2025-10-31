/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const MIN_DAYS_FOR_SHORT_DISCOUNT = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const MIN_DAYS_FOR_LONG_DISCOUNT = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days <= 0) {
    return 0;
  }

  const basePrice = days * DAILY_RATE;

  if (days >= MIN_DAYS_FOR_LONG_DISCOUNT) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MIN_DAYS_FOR_SHORT_DISCOUNT) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
