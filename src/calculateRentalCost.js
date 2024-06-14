/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return PRICE * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return PRICE * days - SHORT_TERM_DISCOUNT;
  }

  return days * PRICE;
}

module.exports = calculateRentalCost;
