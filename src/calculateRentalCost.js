/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return RENT * days - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return RENT * days - SHORT_TERM_DISCOUNT;
  }

  return RENT * days;
}

module.exports = calculateRentalCost;
