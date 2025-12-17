/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_7_DAYS_THRESHOLD = 7;
  const DISCOUNT_7_DAYS_AMOUNT = 50;
  const DISCOUNT_3_DAYS_THRESHOLD = 3;
  const DISCOUNT_3_DAYS_AMOUNT = 20;

  const totalCost = days * DAILY_RATE;

  if (days >= DISCOUNT_7_DAYS_THRESHOLD) {
    return totalCost - DISCOUNT_7_DAYS_AMOUNT;
  }

  if (days >= DISCOUNT_3_DAYS_THRESHOLD) {
    return totalCost - DISCOUNT_3_DAYS_AMOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
