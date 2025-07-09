/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const LONG_DAY_DISCOUNT = 50;
  const SHORT_DAY_DISCOUNT = 20;
  const PRICE_FOR_DAY = 40;

  const price = days * PRICE_FOR_DAY;

  if (days >= LONG_TERM) {
    return price - LONG_DAY_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return price - SHORT_DAY_DISCOUNT;
  }

  return price;
}

calculateRentalCost(5);

module.exports = calculateRentalCost;
