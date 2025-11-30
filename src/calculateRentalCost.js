/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TIME_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TIME_DISCOUNT = 20;

  let basePrice = DAY_PRICE * days

  if (days >= LONG_TERM) {
    return basePrice - LONG_TIME_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_TIME_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
