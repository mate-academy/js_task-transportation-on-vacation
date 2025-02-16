/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  const BIG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const SHORT_TERM_RENTAL_THRESHOLD = 3;
  const LONG_TERM_RENTAL_THRESHOLD = 7;

  const price = days * RENT_COST;

  if (days >= LONG_TERM_RENTAL_THRESHOLD) {
    return price - BIG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENTAL_THRESHOLD) {
    return price - SHORT_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
