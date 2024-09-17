/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAY_PRICE = 40;
  const cost = DAY_PRICE * days;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT_DAY = 3;
  const BIG_DISCOUNT_DAY = 7;

  if (days >= SMALL_DISCOUNT_DAY && days < BIG_DISCOUNT_DAY) {
    return cost - SMALL_DISCOUNT;
  }

  if (days >= BIG_DISCOUNT_DAY) {
    return cost - BIG_DISCOUNT;
  } else {
    return cost;
  }
}

module.exports = calculateRentalCost;
