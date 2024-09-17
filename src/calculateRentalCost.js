/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const RENTAL_COST_WITHOUT_DISCOUNT = days * RENT_PER_DAY;

  if (days >= LONG_TERM) {
    return RENTAL_COST_WITHOUT_DISCOUNT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RENTAL_COST_WITHOUT_DISCOUNT - SHORT_TERM_DISCOUNT;
  }

  return RENTAL_COST_WITHOUT_DISCOUNT;
}

module.exports = calculateRentalCost;
