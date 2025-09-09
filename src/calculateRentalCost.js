/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PRICE = 40;
  const SHORT_TERM = 3;
  const SALE_SHORT = 20;
  const LONG_TERM = 7;
  const SALE_LONG = 50;

  const totalPrice = DAY_PRICE * days;

  if (days >= LONG_TERM) {
    return totalPrice - SALE_LONG;
  }

  if (days >= SHORT_TERM) {
    return totalPrice - SALE_SHORT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
