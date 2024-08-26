/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const PRICE = 40;

  let totalSpent = 0;

  if (days >= LONG_TERM) {
    totalSpent = days * PRICE - LONG_TERM_DISCOUNT;

    return totalSpent;
  }

  if (days >= SHORT_TERM) {
    totalSpent = days * PRICE - SHORT_TERM_DISCOUNT;

    return totalSpent;
  }

  totalSpent = days * PRICE;

  return totalSpent;
}

module.exports = calculateRentalCost;
