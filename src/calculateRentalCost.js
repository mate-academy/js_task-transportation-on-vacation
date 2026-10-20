/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return dayRent * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return dayRent * days - SHORT_TERM_DISCOUNT;
  }

  return dayRent * days;
}

module.exports = calculateRentalCost;
