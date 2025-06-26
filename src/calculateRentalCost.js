/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TIME = 7;
  const SHORT_TIME = 3;
  const LONG_DISCOUNT = 50;
  const SHORT_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;

  let total = days * PRICE_PER_DAY;

  if (days >= LONG_TIME) {
    total -= LONG_DISCOUNT;
  } else if (days >= SHORT_TIME) {
    total -= SHORT_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
