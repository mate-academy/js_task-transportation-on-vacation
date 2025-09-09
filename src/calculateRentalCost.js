/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MANY_DAYS = 7;
  const MANY_DAYS_DISCOUNT = 50;
  const SHORTS_DAYS = 3;
  const SHORTS_DAYS_DISCOUNT = 20;
  const COST_DAY = 40;
  const TotalCost = days * COST_DAY;

  if (days >= MANY_DAYS) {
    return TotalCost - MANY_DAYS_DISCOUNT;
  }

  if (days >= SHORTS_DAYS) {
    return TotalCost - SHORTS_DAYS_DISCOUNT;
  }

  return TotalCost;
}

module.exports = calculateRentalCost;
