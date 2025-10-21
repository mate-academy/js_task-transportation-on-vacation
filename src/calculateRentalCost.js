/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const WEEKLY_DISCOUNT = 50;
  const MULTI_DAY_DISCOUNT = 20;
  const MIN_DAYS_WEEKLY_DISCOUNT = 7;
  const MIN_DAYS_MULTI_DAY_DISCOUNT = 3;
  const baseCost = DAILY_RATE * days;

  if (days >= MIN_DAYS_WEEKLY_DISCOUNT) {
    return baseCost - WEEKLY_DISCOUNT;
  }

  if (days >= MIN_DAYS_MULTI_DAY_DISCOUNT) {
    return baseCost - MULTI_DAY_DISCOUNT;
  }

  return baseCost;
}

calculateRentalCost(1);
calculateRentalCost(3);
calculateRentalCost(7);

module.exports = calculateRentalCost;
