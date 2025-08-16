/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days <= 0) {
    return 0;
  }

  const BASIC_PRICE_PER_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days < SHORT_TERM) {
    return BASIC_PRICE_PER_DAY * days;
  }

  if (days < LONG_TERM) {
    return BASIC_PRICE_PER_DAY * days - SHORT_TERM_DISCOUNT;
  }

  return BASIC_PRICE_PER_DAY * days - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
