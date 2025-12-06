/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;

  const TIER_1_TERM = 3;
  const TIER_1_DISCOUNT = 20;
  const TIER_2_TERM = 7;
  const TIER_2_DISCOUNT = 50;

  if (days >= TIER_2_TERM) {
    return days * PRICE_PER_DAY - TIER_2_DISCOUNT;
  }

  if (days >= TIER_1_TERM) {
    return days * PRICE_PER_DAY - TIER_1_DISCOUNT;
  }

  return days * PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
