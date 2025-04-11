/**
 * @param {number} days
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_7_DAYS = 50;
  const DISCOUNT_3_DAYS = 20;

  const total = days * DAILY_RATE;

  if (days >= 7) {
    return total - DISCOUNT_7_DAYS;
  }

  if (days >= 3) {
    return total - DISCOUNT_3_DAYS;
  }

  return total;
}

module.exports = calculateRentalCost;
