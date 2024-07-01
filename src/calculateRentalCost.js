/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASIC_COST_PER_DAY = days * 40;

  const SHORT_RENTAL_TIME = 3;
  const DISCOUNT_SHORT_TIME = 20;

  const LONG_RENTAL_TIME = 7;
  const DISCOUNT_LONG_TIME = 50;

  if (days >= LONG_RENTAL_TIME) {
    return BASIC_COST_PER_DAY - DISCOUNT_LONG_TIME;
  }

  if (days >= SHORT_RENTAL_TIME) {
    return BASIC_COST_PER_DAY - DISCOUNT_SHORT_TIME;
  }

  return BASIC_COST_PER_DAY;
}

module.exports = calculateRentalCost;
