/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const price = RENT_PER_DAY * days;

  if (days < SHORT_TERM) {
    return price;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return price - SHORT_TERM_DISCOUNT;
  }

  return price - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
