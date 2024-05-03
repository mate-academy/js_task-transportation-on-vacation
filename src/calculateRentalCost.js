/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST = 40;
  const MIN_DISCOUNT = 20;
  const MAX_DISCOUNT = 50;
  const MIN_DAYS = 3;
  const MAX_DAYS = 7;
  const TOTAL_COST = days * COST;

  if (days >= MAX_DAYS) {
    return TOTAL_COST - MAX_DISCOUNT;
  }

  if (days >= MIN_DAYS) {
    return TOTAL_COST - MIN_DISCOUNT;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
