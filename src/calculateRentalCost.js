/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const NUMBER_OF_DAYS = days;
  const AMOUNT = NUMBER_OF_DAYS * BASE_PRICE;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (NUMBER_OF_DAYS >= LONG_TERM) {
    return AMOUNT - LONG_TERM_DISCOUNT;
  }

  if (NUMBER_OF_DAYS >= SHORT_TERM) {
    return AMOUNT - SHORT_TERM_DISCOUNT;
  }

  return AMOUNT;
}

module.exports = calculateRentalCost;
