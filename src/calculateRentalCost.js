/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  const basePrice = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  } else if (days >= MEDIUM_TERM) {
    return basePrice - MEDIUM_TERM_DISCOUNT;
  } else {
    return basePrice;
  }
}

module.exports = calculateRentalCost;
