/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_COST_PER_DAY = 40;
  const LONG_TERM = 7;
  const SEMI_LONG_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SEMI_LONG_TERM_DISCOUNT = 20;
  const basePrice = RENTAL_COST_PER_DAY * days;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SEMI_LONG_TERM) {
    return basePrice - SEMI_LONG_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
