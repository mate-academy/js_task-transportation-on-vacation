/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const BASE_COST = 40;
  const BASE_TERM = 2;
  const SHORT_TERM = 6;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days <= BASE_TERM) {
    return days * BASE_COST;
  }

  if (days > BASE_TERM && days <= SHORT_TERM) {
    return (days * BASE_COST) - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return (days * BASE_COST) - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
