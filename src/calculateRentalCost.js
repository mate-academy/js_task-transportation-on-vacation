/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  let cost = PRICE_PER_DAY * days;

  if (days >= 7) {
    cost -= LONG_TERM_DISCOUNT;
  } else if (days >= 3) {
    cost -= SHORT_TERM_DISCOUNT;
  }

  return cost;
}
module.exports = calculateRentalCost;
