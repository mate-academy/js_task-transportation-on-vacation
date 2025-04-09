/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const LONG_TERM_RENTAL_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_RENTAL_DAYS = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const BASE_PRICE = days * PRICE_PER_DAY;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return BASE_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_RENTAL_DAYS) {
    return BASE_PRICE - MEDIUM_TERM_DISCOUNT;
  }

  return BASE_PRICE;
}

module.exports = calculateRentalCost;
