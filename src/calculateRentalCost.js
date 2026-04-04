/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE = 40;
  const WEEK_DISCOUNT = { period: 7, discount: 50 };
  const SHORT_TIME_DISCOUNT = { period: 3, discount: 20 };
  const total = PRICE * days;

  if (days >= WEEK_DISCOUNT.period) {
    return total - WEEK_DISCOUNT.discount;
  }

  if (days >= SHORT_TIME_DISCOUNT.period) {
    return total - SHORT_TIME_DISCOUNT.discount;
  }

  return total;
}

module.exports = calculateRentalCost;
