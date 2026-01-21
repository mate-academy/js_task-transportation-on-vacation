/**
 * @param {number} days
 * 
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;
  const MIN_DAYS_FOR_3_DISCOUNT = 3;
  const MIN_DAYS_FOR_7_DISCOUNT = 7;

  const totalCost = days * DAILY_RATE;

  if (days >= MIN_DAYS_FOR_7_DISCOUNT) {
    return totalCost - DISCOUNT_7_DAYS;
  }

  if (days >= MIN_DAYS_FOR_3_DISCOUNT) {
    return totalCost - DISCOUNT_3_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
