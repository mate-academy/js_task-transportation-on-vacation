/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_AFTER_3_DAYS = 20;
  const DISCOUNT_AFTER_7_DAYS = 50;
  const DISCOUNT_THRESHOLD_3_DAYS = 3;
  const DISCOUNT_THRESHOLD_7_DAYS = 7;

  const payment = days * DAILY_RATE;

  if (days >= DISCOUNT_THRESHOLD_7_DAYS) {
    return payment - DISCOUNT_AFTER_7_DAYS;
  }

  if (days >= DISCOUNT_THRESHOLD_3_DAYS) {
    return payment - DISCOUNT_AFTER_3_DAYS;
  }

  return payment;
}

module.exports = calculateRentalCost;
