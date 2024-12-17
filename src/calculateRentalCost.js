/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const CAR_COST = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const PRICE = days * CAR_COST;

  if (days >= LONG_TERM) {
    return PRICE - LONG_TERM_DISCOUNT;
  }

  if (days < SHORT_TERM) {
    return PRICE;
  }

  return PRICE - SHORT_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
