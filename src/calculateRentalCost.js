/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_FEE = 40;
  const totalCost = days * DAILY_FEE;

  const DISCOUNT_LVL1 = 20;
  const DISCOUNT_LV1_DAYS = 3;

  const DISCOUNT_LVL2 = 50;
  const DISCOUNT_LV2_DAYS = 7;

  if (days >= DISCOUNT_LV2_DAYS) {
    return totalCost - DISCOUNT_LVL2;
  }

  if (days >= DISCOUNT_LV1_DAYS) {
    return totalCost - DISCOUNT_LVL1;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
