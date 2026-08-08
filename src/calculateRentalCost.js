const PRICE_PER_DAY = 40;
const BASIC_TERM = 3;
const BASIC_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= BASIC_TERM) {
    return basePrice - BASIC_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
