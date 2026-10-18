/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days < SHORT_TERM) {
    return dayRent * days;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return dayRent * days - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return dayRent * days - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
