/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const DISCOUNT_LONG_TERM = 50;
  const DISCOUNT_MID_TERM = 20;

  let total = days * COST_PER_DAY;

  if (days >= 7) {
    total -= DISCOUNT_LONG_TERM;
  } else if (days >= 3) {
    total -= DISCOUNT_MID_TERM;
  }

  return total;
}
module.exports = calculateRentalCost;
