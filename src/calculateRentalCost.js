/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  let cost = days * 40;

  if (days >= LONG_TERM) {
    cost = cost - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    cost = cost - SHORT_TERM_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
