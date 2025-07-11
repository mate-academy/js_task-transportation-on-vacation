/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_PER_DAY = 40;
  const LONG_RENTAL_TERM = 7;
  const LONG_RENTAL_DISCOUNT = 50;
  const SHORT_RENTAL_TERM = 3;
  const SHORT_RENTAL_DISCOUNT = 20;

  const basePrice = days * RENTAL_PER_DAY;

  if (days >= LONG_RENTAL_TERM) {
    return basePrice - LONG_RENTAL_DISCOUNT;
  }

  if (days >= SHORT_RENTAL_TERM) {
    return basePrice - SHORT_RENTAL_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
