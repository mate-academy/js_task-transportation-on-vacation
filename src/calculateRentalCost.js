/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  let cost = days * DAY_COST;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    cost -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    cost -= SHORT_TERM_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
