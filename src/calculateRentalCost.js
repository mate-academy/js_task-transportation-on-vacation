/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const DISCOUNT_7_DAYS = 50;
  const DISCOUNT_3_DAYS = 20;
  const DAYS_FOR_7_DISCOUNT = 7;
  const DAYS_FOR_3_DISCOUNT = 3;
  const COST = days * COST_PER_DAY;

  if (days >= DAYS_FOR_7_DISCOUNT) {
    return COST - DISCOUNT_7_DAYS;
  }

  if (days >= DAYS_FOR_3_DISCOUNT) {
    return COST - DISCOUNT_3_DAYS;
  }

  return COST;
}

module.exports = calculateRentalCost;
