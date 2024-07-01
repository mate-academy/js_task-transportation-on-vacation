/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const TOTAL_COST = days * COST_PER_DAY;

  const SHORT_RENTAL_TIME = 3;
  const DISCOUNT_SHORT_TIME = 20;

  const LONG_RENTAL_TIME = 7;
  const DISCOUNT_LONG_TIME = 50;

  if (days >= LONG_RENTAL_TIME) {
    return TOTAL_COST - DISCOUNT_LONG_TIME;
  }

  if (days >= SHORT_RENTAL_TIME) {
    return TOTAL_COST - DISCOUNT_SHORT_TIME;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
