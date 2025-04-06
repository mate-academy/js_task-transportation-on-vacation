/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_RENTAL_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_RENTAL_DAYS = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return PRICE_PER_DAY * days - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_RENTAL_DAYS) {
    return PRICE_PER_DAY * days - MEDIUM_TERM_DISCOUNT;
  }

  return PRICE_PER_DAY * days;
}
module.exports = calculateRentalCost;
