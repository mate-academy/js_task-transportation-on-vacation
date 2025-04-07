/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const DISCOUNT_FOR_3_DAYS = 20;
  const DISCOUNT_FOR_7_DAYS = 50;
  const MIN_DAYS_FOR_SMALL_DISCOUNT = 3;
  const MIN_DAYS_FOR_LARGE_DISCOUNT = 7;

  let total = days * COST_PER_DAY;

  if (days >= MIN_DAYS_FOR_SMALL_DISCOUNT) {
    total -= DISCOUNT_FOR_3_DAYS;
  }

  if (days >= MIN_DAYS_FOR_LARGE_DISCOUNT) {
    total -= DISCOUNT_FOR_7_DAYS - DISCOUNT_FOR_3_DAYS;
  }

  return total;
}

module.exports = calculateRentalCost;
