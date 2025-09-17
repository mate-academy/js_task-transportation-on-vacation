/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const costForAllDays = COST_PER_DAY * days;

  if (days >= 7) {
    return costForAllDays - 50;
  } else if (days >= 3) {
    return costForAllDays - 20;
  } else {
    return costForAllDays;
  }
}

module.exports = calculateRentalCost;
