/**
 * @param {number} days
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_DAYS_3 = 20;
  const DISCOUNT_DAYS_7 = 50;
  const MIN_DAYS_FOR_SMALL_DISCOUNT = 3;
  const MIN_DAYS_FOR_BIG_DISCOUNT = 7;

  const total = days * DAILY_RATE;

  if (days >= MIN_DAYS_FOR_BIG_DISCOUNT) {
    return total - DISCOUNT_DAYS_7;
  }

  if (days >= MIN_DAYS_FOR_SMALL_DISCOUNT) {
    return total - DISCOUNT_DAYS_3;
  }

  return total;
}

module.exports = calculateRentalCost;
