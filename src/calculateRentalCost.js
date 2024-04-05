/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;

  if (days < 3) {
    return days * COST_PER_DAY;
  }

  if (days < 7) {
    return days * COST_PER_DAY - 20;
  }

  return days * COST_PER_DAY - 50;
}

module.exports = calculateRentalCost;
