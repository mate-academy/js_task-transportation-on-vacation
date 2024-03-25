/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const basePrice = PRICE_PER_DAY * days;
  const DISCOUNT_FOR_THREE_DAYS = 20;
  const DISCOUNT_FOR_SEVEN_DAYS = 50;
  const LONG_TERM = 7;
  const MEDIUM_TERM = 3;

  if (days >= LONG_TERM) {
    return basePrice - DISCOUNT_FOR_SEVEN_DAYS;
  }

  if (days >= MEDIUM_TERM) {
    return basePrice - DISCOUNT_FOR_THREE_DAYS;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
