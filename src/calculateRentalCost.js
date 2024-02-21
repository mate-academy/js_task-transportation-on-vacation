/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  let TOTAL_COST = days * DAILY_RATE;

  if (days >= 7) {
    TOTAL_COST -= 50;
  } else if (days >= 3) {
    TOTAL_COST -= 20;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
