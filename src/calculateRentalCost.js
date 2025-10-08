/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_FOR_THREE_DAYS = 20;
  const DISCOUNT_FOR_SEVEN_DAYS = 50;

  const TOTAL = days * DAILY_RATE;

  if (days >= 7) {
    return TOTAL - DISCOUNT_FOR_SEVEN_DAYS;
  }

  if (days >= 3) {
    return TOTAL - DISCOUNT_FOR_THREE_DAYS;
  }

  return TOTAL;
}

module.exports = calculateRentalCost;
