/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const COST_PER_DAY = 40;

  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const basePrice = (days * COST_PER_DAY);

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return basePrice - MIDDLE_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
