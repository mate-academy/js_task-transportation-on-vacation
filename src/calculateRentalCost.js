/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < SHORT_TERM) {
    return PRICE_PER_DAY * days;
  } else if (days >= SHORT_TERM && days < LONG_TERM) {
    return PRICE_PER_DAY * days - SHORT_TERM_DISCOUNT;
  } else {
    return PRICE_PER_DAY * days - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
