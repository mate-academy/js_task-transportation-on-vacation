/**
 * @param {number} days
 * @returns {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_7_DAYS = 50;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_THRESHOLD_7 = 7;
  const DISCOUNT_THRESHOLD_3 = 3;

  const totalCost = days * DAILY_RATE;

  if (days >= DISCOUNT_THRESHOLD_7) {
    return totalCost - DISCOUNT_7_DAYS;
  }

  if (days >= DISCOUNT_THRESHOLD_3) {
    return totalCost - DISCOUNT_3_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
