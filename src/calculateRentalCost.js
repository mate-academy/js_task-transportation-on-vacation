/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;

  const DISCOUNT_LVL1 = 20;
  const DISCOUNT_LVL2 = 50;

  const DISCOUNT_LVL1_MIN_DAYS = 3;
  const DISCOUNT_LVL2_MIN_DAYS = 7;

  const sum = days * COST_PER_DAY;

  switch (true) {
    case days >= DISCOUNT_LVL2_MIN_DAYS:
      return sum - DISCOUNT_LVL2;
    case days >= DISCOUNT_LVL1_MIN_DAYS:
      return sum - DISCOUNT_LVL1;
    default:
      return sum;
  }
}

module.exports = calculateRentalCost;
