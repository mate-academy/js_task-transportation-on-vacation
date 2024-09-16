/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_RENT = 7;
  const LONG_RENT_DISCOUNT = 50;
  const SHORT_RENT = 3;
  const SHORT_RENT_DISCOUNT = 20;

  const basicPrice = days * PRICE_PER_DAY;

  if (days >= LONG_RENT) {
    return basicPrice - LONG_RENT_DISCOUNT;
  }

  if (days >= SHORT_RENT) {
    return basicPrice - SHORT_RENT_DISCOUNT;
  }

  return basicPrice;
}

module.exports = calculateRentalCost;
