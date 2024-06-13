/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  // write code here
  const NUMBER_OF_DAYS = days;
  const DAY_COST = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const TOTAL_AMOUNT = NUMBER_OF_DAYS * DAY_COST;

  if (NUMBER_OF_DAYS >= LONG_TERM) {
    return TOTAL_AMOUNT - LONG_TERM_DISCOUNT;
  }

  if (NUMBER_OF_DAYS >= SHORT_TERM) {
    return TOTAL_AMOUNT - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_AMOUNT;
}

module.exports = calculateRentalCost;
