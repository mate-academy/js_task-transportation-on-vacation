/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const price = 40;

  if (days >= LONG_TERM) {
    return price * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return price * days - SHORT_TERM_DISCOUNT;
  }

  return price * days;
}

module.exports = calculateRentalCost;
