/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const LONG_RENT = 7;
  const SHORT_RENT = 3;
  const DISCOUNT_LONG = 50;
  const DISCOUNT_SHORT = 20;

  const price = BASE_PRICE * days;

  if (days >= LONG_RENT) {
    return price - DISCOUNT_LONG;
  }

  if (days >= SHORT_RENT) {
    return price - DISCOUNT_SHORT;
  }

  return price;
}

module.exports = calculateRentalCost;
