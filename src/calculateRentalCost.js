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

  if (days > 2 && days < 7) {
    return basePrice - DISCOUNT_FOR_THREE_DAYS;
  }

  if (days > 6) {
    return basePrice - DISCOUNT_FOR_SEVEN_DAYS;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
