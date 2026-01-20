/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;
  const MIN_DAYS_DISCOUNT_3 = 3;
  const MIN_DAYS_DISCOUNT_7 = 7;

  const basePrice = days * DAILY_RATE;

  if (days >= MIN_DAYS_DISCOUNT_7) {
    return basePrice - DISCOUNT_7_DAYS;
  }

  if (days >= MIN_DAYS_DISCOUNT_3) {
    return basePrice - DISCOUNT_3_DAYS;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
