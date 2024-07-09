/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const RENT_PRICE = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return days * RENT_PRICE - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * RENT_PRICE - LONG_TERM_DISCOUNT;
  }

  return RENT_PRICE * days;
}

module.exports = calculateRentalCost;
