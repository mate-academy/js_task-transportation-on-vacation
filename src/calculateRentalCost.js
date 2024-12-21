/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const SHORT_DAY = 3;
  const LONG_DAY = 7;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const PRICE = 40;

  let sum = PRICE * days;
  let discount = 0;

  if (days >= SHORT_DAY) {
    discount = SMALL_DISCOUNT;
  }

  if (days >= LONG_DAY) {
    discount = BIG_DISCOUNT;
  }

  sum = sum - discount;

  return sum;
}

module.exports = calculateRentalCost;
