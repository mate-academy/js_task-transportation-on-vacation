/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const cost = days * COST_PER_DAY;

  switch (true) {
    case days >= LONG_TERM :
      return cost - LONG_TERM_DISCOUNT;
    case days >= SHORT_TERM :
      return cost - SHORT_TERM_DISCOUNT;
    default:
      return cost;
  }
}

module.exports = calculateRentalCost;
