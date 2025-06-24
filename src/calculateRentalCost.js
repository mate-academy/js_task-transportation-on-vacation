/**
 * @param {number} days
 *
 * @return {number}
 */
const COST_BY_DAY = 40;

function calculateRentalCost(days) {
  if (days > 6) {
    return COST_BY_DAY * days - 50;
  }

  if (days > 2) {
    return COST_BY_DAY * days - 20;
  }

  return COST_BY_DAY * days;
}

module.exports = calculateRentalCost;
