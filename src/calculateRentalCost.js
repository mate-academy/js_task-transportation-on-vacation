/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RATE = 40;
  const DISCOUNT_FOR_7_DAYS = 50;
  const DISCOUNT_FOR_3_DAYS = 20;
  const MIN_DAYS_FOR_7_DISCOUNT = 7;
  const MIN_DAYS_FOR_3_DISCOUNT = 3;

  const baseCost = days * DAILY_RATE;

  if (days >= MIN_DAYS_FOR_7_DISCOUNT) {
    return baseCost - DISCOUNT_FOR_7_DAYS;
  }

  if (days >= MIN_DAYS_FOR_3_DISCOUNT) {
    return baseCost - DISCOUNT_FOR_3_DAYS;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
