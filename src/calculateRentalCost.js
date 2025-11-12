/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const MINIMUM_DAYS_FORCOST = 3;
  const MAXIMUM_DAYS_FORCOST = 7;
  const MINIMUM_DISCOUNT = 20;
  const MAXIMUM_DISCOUNT = 50;
  const COST_PER_DAY = 40;

  if (days >= MINIMUM_DAYS_FORCOST && days < MAXIMUM_DAYS_FORCOST) {
    return days * COST_PER_DAY - MINIMUM_DISCOUNT;
  }

  if (days >= MAXIMUM_DAYS_FORCOST) {
    return days * COST_PER_DAY - MAXIMUM_DISCOUNT;
  }

  return days * COST_PER_DAY;
}

module.exports = calculateRentalCost;
