/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_7_PLUS_DAYS = 50;
  const DISCOUNT_3_PLUS_DAYS = 20;

  const cost = days * DAILY_RATE;

  if (days >= 7) {
    return cost - DISCOUNT_7_PLUS_DAYS;
  }

  if (days >= 3) {
    return cost - DISCOUNT_3_PLUS_DAYS;
  }

  return cost;
}

module.exports = calculateRentalCost;
