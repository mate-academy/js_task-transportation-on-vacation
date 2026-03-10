/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAY_COST = 40;
  const DURATION_THREE = 3;
  const DISCOUNT_FIRST = 20;
  const DURATION_WEEK = 7;
  const DISCOUNT_SECOND = 50;
  const baseCost = days * DAY_COST;

  if (days >= DURATION_WEEK) {
    return baseCost - DISCOUNT_SECOND;
  }

  if (days >= DURATION_THREE) {
    return baseCost - DISCOUNT_FIRST;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
