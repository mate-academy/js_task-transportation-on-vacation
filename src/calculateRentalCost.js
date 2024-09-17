/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_FOR_ONE_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  let totalCost = days * PRICE_FOR_ONE_DAY;

  if (days >= LONG_TERM) {
    totalCost -= LONG_TERM_DISCOUNT;

    return totalCost;
  }

  if (days >= SHORT_TERM) {
    totalCost -= SHORT_TERM_DISCOUNT;

    return totalCost;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
