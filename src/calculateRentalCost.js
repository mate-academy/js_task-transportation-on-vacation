/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const NORMAL_PRICE = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days < SHORT_TERM) {
    return NORMAL_PRICE * days;
  }

  if (days < LONG_TERM) {
    return NORMAL_PRICE * days - SHORT_TERM_DISCOUNT;
  }

  return NORMAL_PRICE * days - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
