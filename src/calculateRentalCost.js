/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_COST_PER_DAY = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  if (days >= LONG_TERM) {
    return days * CAR_COST_PER_DAY - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * CAR_COST_PER_DAY - SMALL_DISCOUNT;
  }

  return days * CAR_COST_PER_DAY;
}

module.exports = calculateRentalCost;
