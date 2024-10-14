/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_COST = 40;
  const MANY_DAYS = 7;
  const BIG_DISCOUNT = 50;
  const FEW_DAYS = 3;
  const SMALL_DISCOUNT = 20;

  let totalCost = DAILY_COST * days;

  if (days >= MANY_DAYS) {
    return (totalCost = totalCost - BIG_DISCOUNT);
  }

  if (days >= FEW_DAYS) {
    return (totalCost = totalCost - SMALL_DISCOUNT);
  }

  return totalCost;
}

module.exports = calculateRentalCost;
