/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const DISCOUNT_LONG = 50;
  const DISCOUNT_MEDIUM = 20;

  const MIN_DAYS_FOR_MEDIUM_DISCOUNT = 3;
  const MIN_DAYS_FOR_LONG_DISCOUNT = 7;

  const baseCost = days * COST_PER_DAY;

  if (days >= MIN_DAYS_FOR_LONG_DISCOUNT) {
    return baseCost - DISCOUNT_LONG;
  }

  if (days >= MIN_DAYS_FOR_MEDIUM_DISCOUNT) {
    return baseCost - DISCOUNT_MEDIUM;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
