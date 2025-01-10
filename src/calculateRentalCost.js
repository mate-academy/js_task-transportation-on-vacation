/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_COST = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DAYS = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const basePrice = days * DAILY_COST;

  if (days >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_DAYS) {
    return basePrice - MEDIUM_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
