/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const DISCOUNT_FOR_7_DAYS = 50;
  const DISCOUNT_THRESHOLD_7_DAYS = 7;
  const DISCOUNT_FOR_3_DAYS = 20;
  const DISCOUNT_THRESHOLD_3_DAYS = 3;

  if (days >= DISCOUNT_THRESHOLD_7_DAYS) {
    return days * COST_PER_DAY - DISCOUNT_FOR_7_DAYS;
  }

  if (days >= DISCOUNT_THRESHOLD_3_DAYS) {
    return days * COST_PER_DAY - DISCOUNT_FOR_3_DAYS;
  }

  return days * COST_PER_DAY;
}

module.exports = calculateRentalCost;
