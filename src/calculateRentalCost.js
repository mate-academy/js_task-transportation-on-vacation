/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_SMALL = 20;
  const DISCOUNT_LARGE = 50;
  const SMALL_DISCOUNT_DAYS = 3;
  const LARGE_DISCOUNT_DAYS = 7;

  const total = days * DAILY_RATE;

  if (days >= LARGE_DISCOUNT_DAYS) {
    return total - DISCOUNT_LARGE;
  }

  if (days >= SMALL_DISCOUNT_DAYS) {
    return total - DISCOUNT_SMALL;
  }

  return total;
}

module.exports = calculateRentalCost;
