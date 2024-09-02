/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalAmount = 0;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const RENT_COST = 40;

  if (days >= LONG_TERM) {
    totalAmount = (days * RENT_COST) - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    totalAmount = (days * RENT_COST) - SHORT_TERM_DISCOUNT;
  }

  if (days < SHORT_TERM) {
    totalAmount = days * RENT_COST;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
