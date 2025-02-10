/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const COST_PER_DAY = 40;
  const DISCOUNT_FOR_3_PLUS_DAYS = 20;
  const DISCOUNT_FOR_7_PLUS_DAYS = 50;
  const MEDIUM_TERM_RENTAL = 3;
  const LONG_TERM_RENTAL = 7;

  let cost = days * COST_PER_DAY;

  if (days >= LONG_TERM_RENTAL) {
    cost -= DISCOUNT_FOR_7_PLUS_DAYS;
  } else if (days >= MEDIUM_TERM_RENTAL) {
    cost -= DISCOUNT_FOR_3_PLUS_DAYS;
  }

  return cost;
}

module.exports = calculateRentalCost;
