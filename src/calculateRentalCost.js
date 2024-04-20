/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOND = 20;
  const LONG_TERM_DISCOND = 50;

  const basePrise = days * COST_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrise - LONG_TERM_DISCOND;
  }

  if (days >= SHORT_TERM) {
    return basePrise - SHORT_TERM_DISCOND;
  }

  return basePrise;
}

module.exports = calculateRentalCost;
