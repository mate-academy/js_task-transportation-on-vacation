/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_PRICE = 40;
  const SHORT_RENT_DISCOUNT = 20;
  const SHORT_RENT = 3;
  const LONG_RENT = 7;
  const LONG_RENT_DISCOUNT = 50;

  const basePrice = days * ONE_DAY_PRICE;

  if (days >= LONG_RENT) {
    return basePrice - LONG_RENT_DISCOUNT;
  }

  if (days >= SHORT_RENT) {
    return basePrice - SHORT_RENT_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
