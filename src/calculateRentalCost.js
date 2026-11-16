/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RENT = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  let discount = 0;

  if (days >= LONG_TERM) {
    discount = LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    discount = SHORT_TERM_DISCOUNT;
  }

  const cost = days * DAILY_RENT - discount;

  return cost;
}

module.exports = calculateRentalCost;
