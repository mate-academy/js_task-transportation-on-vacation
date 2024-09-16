/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const SMALL_DISCOUNT_DAYS = 3;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT_DAYS = 7;
  const BIG_DISCOUNT = 50;

  const totalCost = days * COST_PER_DAY;

  if (days >= BIG_DISCOUNT_DAYS) {
    return totalCost - BIG_DISCOUNT;
  }

  if (days >= SMALL_DISCOUNT_DAYS) {
    return totalCost - SMALL_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
