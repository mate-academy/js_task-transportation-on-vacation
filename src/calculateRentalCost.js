/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_7_DAYS = 50;
  const DISCOUNT_3_DAYS = 20;
  const DAYS_FOR_7_DISCOUNT = 7;
  const DAYS_FOR_3_DISCOUNT = 3;

  const total = days * DAILY_RATE;

  if (days >= DAYS_FOR_7_DISCOUNT) {
    return total - DISCOUNT_7_DAYS;
  }

  if (days >= DAYS_FOR_3_DISCOUNT) {
    return total - DISCOUNT_3_DAYS;
  }

  return total;
}

module.exports = calculateRentalCost;

module.exports = calculateRentalCost;
