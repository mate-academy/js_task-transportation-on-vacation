/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_THRESHOLD = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  const baseCost = COST_PER_DAY * days;

  if (days >= LONG_TERM_THRESHOLD) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_THRESHOLD) {
    return baseCost - MEDIUM_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
