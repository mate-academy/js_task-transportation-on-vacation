/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_RENT_COST = 40;
  const LONG_TERM = 7;
  const DISCOUNT_LONG_TERM = 50;
  const SHORT_TERM = 3;
  const DISCOUNT_SHORT_TERM = 20;

  const basePrice = days * CAR_RENT_COST;

  if (days >= LONG_TERM) {
    return basePrice - DISCOUNT_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return basePrice - DISCOUNT_SHORT_TERM;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
