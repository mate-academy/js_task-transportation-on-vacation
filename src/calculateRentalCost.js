/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCAUNT = 20;
  const totalPrice = DAILY_PRICE * days;

  if (days >= LONG_TERM) {
    return totalPrice - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalPrice - SMALL_DISCAUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
