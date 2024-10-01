/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const DAILY_RENT = 40;

  const basePrice = days * DAILY_RENT;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return basePrice - MEDIUM_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
