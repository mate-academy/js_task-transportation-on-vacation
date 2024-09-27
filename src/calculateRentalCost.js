/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  let discount = 0;

  if (days >= SHORT_TERM) {
    discount = 20;
  }

  if (days >= LONG_TERM) {
    discount = 50;
  }

  return (COST_PER_DAY * days) - discount;
}

module.exports = calculateRentalCost;
