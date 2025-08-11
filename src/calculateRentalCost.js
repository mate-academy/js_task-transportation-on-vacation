/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const TOTAL_COST = COST_PER_DAY * days;
  const DISCOUNT_ONE = TOTAL_COST - 50;
  const DISCOUNT_TWO = TOTAL_COST - 20;

  if (days >= 7) {
    return DISCOUNT_ONE;
  }

  if (days >= 3) {
    return DISCOUNT_TWO;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
