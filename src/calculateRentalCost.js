/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const COST = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_COST = 20;
  const LONG_TERM = 7;
  const LONG_TERM_COST = 50;

  const total = days * COST;

  if (days >= LONG_TERM) {
    return total - LONG_TERM_COST;
  }

  if (days >= SHORT_TERM) {
    return total - SHORT_TERM_COST;
  }

  return total;
}

module.exports = calculateRentalCost;
