/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40 * days;
  const DISCOUNT_FROM_SEVEN_DAYS = 50;
  const DISCOUNT_FROM_THREE_DAYS = 20;
  const LONG_PERIOD = 7;
  const SMALL_PERIOD = 3;

  if (days >= LONG_PERIOD) {
    return PRICE_PER_DAY - DISCOUNT_FROM_SEVEN_DAYS;
  }

  if (days >= SMALL_PERIOD) {
    return PRICE_PER_DAY - DISCOUNT_FROM_THREE_DAYS;
  }

  return PRICE_PER_DAY;
}
module.exports = calculateRentalCost;
