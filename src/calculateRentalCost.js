/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RATE = 40;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const basePrice = days * DAY_RATE;

  if (days < 3) {
    return basePrice;
  }

  if (days < 7) {
    return basePrice - MEDIUM_TERM_DISCOUNT;
  }

  return basePrice - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
