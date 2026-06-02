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
  const dayliPrice = 40;

  if (days >= LONG_TERM) {
    return dayliPrice * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return dayliPrice * days - SHORT_TERM_DISCOUNT;
  }

  return dayliPrice * days;
}

module.exports = calculateRentalCost;
