/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const TOTAL_COST = 40 * days;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const DAYS_SMALL_DISCOUNT = 3;
  const DAYS_BIG_DISCOUNT = 7;

  if (days >= DAYS_BIG_DISCOUNT) {
    return TOTAL_COST - BIG_DISCOUNT;
  }

  if (days >= DAYS_SMALL_DISCOUNT) {
    return TOTAL_COST - SMALL_DISCOUNT;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
