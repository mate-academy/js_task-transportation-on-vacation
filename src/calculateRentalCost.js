/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_SMALL = 20;
  const DISCOUNT_LARGE = 50;

  if (days < 3) {
    return DAILY_RATE * days;
  }

  if (days < 7) {
    return DAILY_RATE * days - DISCOUNT_SMALL;
  }

  return DAILY_RATE * days - DISCOUNT_LARGE;
}

module.exports = calculateRentalCost;
