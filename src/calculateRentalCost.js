/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const THIRD_DAY_DISCOUNT = 20;
  const SEVENTH_DAY_DISCOUNT = 50;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  if (days >= LONG_TERM) {
    return days * PRICE_PER_DAY - SEVENTH_DAY_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * PRICE_PER_DAY - THIRD_DAY_DISCOUNT;
  }

  return days * PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
