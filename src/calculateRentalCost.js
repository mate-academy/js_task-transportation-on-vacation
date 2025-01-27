/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= SHORT_TERM && days <= 6) {
    return days * BASE_COST - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * BASE_COST - LONG_TERM_DISCOUNT;
  }

  return BASE_COST * days;
}

module.exports = calculateRentalCost;
