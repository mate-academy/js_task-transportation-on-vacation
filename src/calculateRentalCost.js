/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM_RENTAL_DAYS = 7;
  const SHORT_TERM_RENTAL_DAYS = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const PRICE_PER_DAY = 40;
  const total = PRICE_PER_DAY * days;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return total - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM_RENTAL_DAYS) {
    return total - SHORT_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
