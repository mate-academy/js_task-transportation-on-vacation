/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const ONE_DAYS_COST = 40;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;

  const price = days * ONE_DAYS_COST;

  if (days >= LONG_TERM) {
    return price - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return price - MID_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
