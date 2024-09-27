/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_PRICE_PER_DAY = 40;
  const SHORT_TERM_OF_RENTAL = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_OF_RENTAL = 7;
  const LONG_TERM_DISCOUNT = 50;
  const basePrice = days * RENTAL_PRICE_PER_DAY;

  if (days >= LONG_TERM_OF_RENTAL) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_OF_RENTAL) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
