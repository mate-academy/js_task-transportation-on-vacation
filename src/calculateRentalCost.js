/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_DAY = 40;
  const DISCOUNT_MIN = 20;
  const DISCOUNT_MAX = 50;
  const DAYS_FOR_MIN_DISCOUNT = 3;
  const DAYS_FOR_MAX_DISCOUNT = 7;

  if (days >= DAYS_FOR_MAX_DISCOUNT) {
    return days * PRICE_DAY - DISCOUNT_MAX;
  }

  if (days >= DAYS_FOR_MIN_DISCOUNT) {
    return days * PRICE_DAY - DISCOUNT_MIN;
  }

  return days * PRICE_DAY;
}

module.exports = calculateRentalCost;
