/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const TOTAL_COST = 40 * days;

  if (days >= 7) {
    return TOTAL_COST - 50;
  }

  if (days >= 3) {
    return TOTAL_COST - 20;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
