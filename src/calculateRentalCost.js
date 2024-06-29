/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PAY_PER_DAY = 40;
  const LONG_TIME = 7;
  const LONG_TIME_DISCOUNT = 50;
  const SHORT_TIME = 3;
  const SHORT_TIME_DISCOUNT = 20;
  const price = days * PAY_PER_DAY;

  if (days >= LONG_TIME) {
    return price - LONG_TIME_DISCOUNT;
  }

  if (days >= SHORT_TIME) {
    return price - SHORT_TIME_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
