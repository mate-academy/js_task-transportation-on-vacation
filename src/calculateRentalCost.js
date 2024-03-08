/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_COST = 40;
  const LONG_TERM_RENT = 7;
  const SHORT_TERM_RENT = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const basePrice = days * CAR_COST;

  if (days >= LONG_TERM_RENT) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENT) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
