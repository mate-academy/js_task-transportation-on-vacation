/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_COST = 40;
  const MANY_DAYS = 7;
  const FEW_DAYS = 3;
  const MANY_DAYS_DISCOUNT = 50;
  const FEW_DAYS_DISCOUNT = 20;

  const totalCost = DAILY_COST * days;

  if (days >= MANY_DAYS) {
    return totalCost - MANY_DAYS_DISCOUNT;
  }

  if (days >= FEW_DAYS) {
    return totalCost - FEW_DAYS_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
