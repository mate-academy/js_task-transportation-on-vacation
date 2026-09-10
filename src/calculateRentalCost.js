/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;

  if (days > 0 && days < 3) {
    return days * DAILY_RATE;
  }

  if (days >= 3 && days < 7) {
    return days * DAILY_RATE - DISCOUNT_3_DAYS;
  }

  if (days >= 7) {
    return days * DAILY_RATE - DISCOUNT_7_DAYS;
  }
}

module.exports = calculateRentalCost;
