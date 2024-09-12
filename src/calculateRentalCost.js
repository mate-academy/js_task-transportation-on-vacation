/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PRICE = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const SHORT_PERIOD = 3;
  const LONG_PERIOD = 7;

  if (days >= LONG_PERIOD) {
    return days * DAY_PRICE - BIG_DISCOUNT;
  }

  if (days >= SHORT_PERIOD) {
    return days * DAY_PRICE - SMALL_DISCOUNT;
  }

  return days * DAY_PRICE;
}

module.exports = calculateRentalCost;
