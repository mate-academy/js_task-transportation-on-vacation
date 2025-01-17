/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const COST_CAR_DAY = 40;
  const COST_CAR_DISCOUNT = days >= 7 ? 50 : 20;

  if (days < 3) {
    return days * COST_CAR_DAY;
  }

  return days * COST_CAR_DAY - COST_CAR_DISCOUNT;
}

module.exports = calculateRentalCost;
