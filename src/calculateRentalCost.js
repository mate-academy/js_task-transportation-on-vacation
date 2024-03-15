/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_COST = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_THRESHOLD = 3;
  const LONG_TERM_THRESHOLD = 7;

  if (days < SHORT_TERM_THRESHOLD) {
    return BASE_COST * days;
  }

  if (days >= LONG_TERM_THRESHOLD) {
    return BASE_COST * days - LONG_TERM_DISCOUNT;
  }

  return BASE_COST * days - SHORT_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
