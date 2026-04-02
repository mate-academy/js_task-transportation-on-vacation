/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const RENT_COST = PRICE_PER_DAY * days;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return RENT_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RENT_COST - SHORT_TERM_DISCOUNT;
  }

  return RENT_COST;
}

module.exports = calculateRentalCost;
