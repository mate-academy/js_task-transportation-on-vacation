/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days < LONG_TERM && days >= SHORT_TERM) {
    return RENT_COST * days - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return RENT_COST * days - LONG_TERM_DISCOUNT;
  }

  return RENT_COST * days;
}

module.exports = calculateRentalCost;
