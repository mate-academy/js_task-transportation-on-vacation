/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LARGE_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const total = DAILY_RATE * days;

  if (days >= 7) {
    return total - LARGE_DISCOUNT;
  }

  if (days >= 3) {
    return total - SMALL_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
