/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;

  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days < SHORT_TERM) {
    return days * COST_PER_DAY;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return days * COST_PER_DAY - SHORT_TERM_DISCOUNT;
  }

  return days * COST_PER_DAY - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
