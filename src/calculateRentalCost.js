/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COSTS = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCONT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCONT = 20;

  const totalPrice = RENT_COSTS * days;

  if (days >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCONT;
  }

  if (days >= SHORT_TERM) {
    return totalPrice - SHORT_TERM_DISCONT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
