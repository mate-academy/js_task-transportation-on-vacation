/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  // write code here
  const basePrice = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;
  const DAYS_TO_BIG_DISCOUNT = 7;
  const DAYS_TO_SMALL_DISCOUNT = 3;

  if (days >= DAYS_TO_BIG_DISCOUNT) {
    return basePrice * days - LONG_TERM_DISCOUNT;
  }

  if (days >= DAYS_TO_SMALL_DISCOUNT) {
    return basePrice * days - MEDIUM_TERM_DISCOUNT;
  }

  return basePrice * days;
}

module.exports = calculateRentalCost;
