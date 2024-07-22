/**
 * @param {number} days
 *
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_OF_DAY = 40;
  const LONG_TERMIN = 7;
  const LONG_TERMIN_DISCOUNT = 50;
  const SHORT_TERMIN = 3;
  const SHORT_TERMIN_DISCOUNT = 20;

  const basePrice = days * PRICE_OF_DAY;

  if (days >= LONG_TERMIN) {
    return basePrice - LONG_TERMIN_DISCOUNT;
  }

  if (days >= SHORT_TERMIN) {
    return basePrice - SHORT_TERMIN_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
