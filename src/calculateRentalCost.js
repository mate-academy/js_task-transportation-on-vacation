/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  if (days >= LONG_TERM) {
    return days * rentPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * rentPrice - SHORT_TERM_DISCOUNT;
  }

  return days * rentPrice;
}

module.exports = calculateRentalCost;
