/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_CAR_COST = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const PRICE = RENT_CAR_COST * days;

  if (days >= LONG_TERM) {
    return PRICE - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return PRICE - SHORT_TERM_DISCOUNT;
  } else {
    return PRICE;
  }
}

module.exports = calculateRentalCost;
