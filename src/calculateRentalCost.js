/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code > here <

  const PRICE_PER_DAY = 40;
  const TIER_2_START_DAY = 3;
  const TIER_3_START_DAY = 7;
  const REDUCTION_ON_TIER_2 = 20;
  const REDUCTION_ON_TIER_3 = 50;

  const totalBeforeReduction = days * PRICE_PER_DAY;

  if (days >= TIER_3_START_DAY) {
    return totalBeforeReduction - REDUCTION_ON_TIER_3;
  }

  if (days >= TIER_2_START_DAY) {
    return totalBeforeReduction - REDUCTION_ON_TIER_2;
  }

  return days * PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
