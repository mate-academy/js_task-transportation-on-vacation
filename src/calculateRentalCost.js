/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_FOR_3_DAYS = 20;
  const DISCOUNT_FOR_7_DAYS = 50;
  const DAYS_FOR_3_DAY_DISCOUNT = 3;
  const DAYS_FOR_7_DAY_DISCOUNT = 7;

  const baseCost = days * DAILY_RATE;

  if (days >= DAYS_FOR_7_DAY_DISCOUNT) {
    return baseCost - DISCOUNT_FOR_7_DAYS;
  }

  if (days >= DAYS_FOR_3_DAY_DISCOUNT) {
    return baseCost - DISCOUNT_FOR_3_DAYS;
  }

  return baseCost;
}

module.exports = calculateRentalCost;

module.exports = calculateRentalCost;
