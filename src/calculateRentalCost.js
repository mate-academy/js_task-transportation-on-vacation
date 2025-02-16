/**
 * @param {number} days
 *
 * @return {number}
 */
const RENT_COST = 40;
const SMALL_TERM = 3;
const LONG_TERM = 7;
const SMALL_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const basePrice = days * RENT_COST;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SMALL_TERM) {
    return basePrice - SMALL_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
