/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const DISCOUNT_WEEK = 50;
  const DISCOUNT_THREE_DAYS = 20;
  const DAYS_FOR_WEEK_DISCOUNT = 7;
  const DAYS_FOR_THREE_DAY_DISCOUNT = 3;

  const baseCost = days * PRICE_PER_DAY;

  if (days >= DAYS_FOR_WEEK_DISCOUNT) {
    return baseCost - DISCOUNT_WEEK;
  }

  if (days >= DAYS_FOR_THREE_DAY_DISCOUNT) {
    return baseCost - DISCOUNT_THREE_DAYS;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
