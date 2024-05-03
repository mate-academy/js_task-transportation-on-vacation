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
  let totalCost = days * COST;

  if (days >= MAX_DAYS) {
    return totalCost - MAX_DISCOUNT;
  }

  if (days >= MIN_DAYS) {
    return totalCost - MIN_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
