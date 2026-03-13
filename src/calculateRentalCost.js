/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SHORT_RENT_DISCOUNT = 20;
  const LONG_RENT_DISCOUNT = 50;
  const SHORT_RENT_DAYS = 3;
  const LONG_RENT_DAYS = 7;
  const defaultPrice = days * PRICE_PER_DAY;

  if (days >= LONG_RENT_DAYS) {
    return defaultPrice - LONG_RENT_DISCOUNT;
  }

  if (days >= SHORT_RENT_DAYS) {
    return defaultPrice - SHORT_RENT_DISCOUNT;
  }

  return defaultPrice;
}

module.exports = calculateRentalCost;
