/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const TOTAL_PRICE = pricePerDay * days;
  const SHORT_TERM = 3;
  const SHORT_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return TOTAL_PRICE - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return TOTAL_PRICE - SHORT_DISCOUNT;
  }

  return TOTAL_PRICE;
}

module.exports = calculateRentalCost;
