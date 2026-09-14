/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const NUMBER_OF_DAYS = days;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const PRICE = days * 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (NUMBER_OF_DAYS >= LONG_TERM) {
    return PRICE - LONG_TERM_DISCOUNT;
  }

  if (NUMBER_OF_DAYS >= SHORT_TERM) {
    return PRICE - SHORT_TERM_DISCOUNT;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
