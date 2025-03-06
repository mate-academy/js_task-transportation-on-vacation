/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_STAY = 7;
  const LONG_STAY_DISCOUNT = 50;
  const MID_STAY = 3;
  const MID_STAY_DISCOUNT = 20;
  const totalCost = days * COST_PER_DAY;

  if (days >= LONG_STAY) {
    return totalCost - LONG_STAY_DISCOUNT;
  }

  if (days >= MID_STAY) {
    return totalCost - MID_STAY_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
