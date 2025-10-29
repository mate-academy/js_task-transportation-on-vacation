/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const COST_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  let totalCost = days * COST_PER_DAY;

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
