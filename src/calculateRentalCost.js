/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  const RENT_DISCOUNT_THREE_DAYS = 20;
  const RENT_DISCOUNT_SEVEN_DAYS = 50;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  const basePrice = RENT_COST * days;

  if (days >= LONG_TERM) {
    return basePrice - RENT_DISCOUNT_SEVEN_DAYS;
  }

  if (days >= SHORT_TERM) {
    return basePrice - RENT_DISCOUNT_THREE_DAYS;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
