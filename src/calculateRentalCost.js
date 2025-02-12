/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_7_DAYS = 50;
  const DISCOUNT_3_DAYS = 20;

  const totalCost = days * DAILY_RATE;

  if (days >= 7) return totalCost - DISCOUNT_7_DAYS;
  if (days >= 3) return totalCost - DISCOUNT_3_DAYS;

  return totalCost;
}

module.exports = calculateRentalCost;
