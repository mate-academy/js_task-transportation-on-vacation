/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const currentPrice = PRICE_PER_DAY * days;
  const SHORT_DISCOUNT = 20;
  const LONG_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;


  if (days >= LONG_TERM) {
    return  currentPrice - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return currentPrice - SHORT_DISCOUNT;
  }

  return currentPrice;
}

module.exports = calculateRentalCost;
