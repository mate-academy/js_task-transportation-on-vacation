/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_PRICE_PER_DAY = 40;
  const LONG_TERM_RENTAL_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_RENTAL_DAYS = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  const basePrice = days * RENTAL_PRICE_PER_DAY;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_RENTAL_DAYS) {
    return basePrice - MEDIUM_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
