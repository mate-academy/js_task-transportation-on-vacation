/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const LONG_THERM = 7;
  const LONG_THERM_DISCOUNT = 50;
  const SHORT_THERM = 3;
  const SHORT_THERM_DISCOUNT = 20;
  const basePrice = days * PRICE;

  if (days >= LONG_THERM) {
    return basePrice - LONG_THERM_DISCOUNT;
  }

  if (days >= SHORT_THERM) {
    return basePrice - SHORT_THERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
