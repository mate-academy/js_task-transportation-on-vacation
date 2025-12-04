/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let TOTAL_AMOUNT = 0;

  const BASE_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TREM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  for (let i = 1; i <= days; i++) {
    TOTAL_AMOUNT += BASE_PRICE;
  }

  if (days >= LONG_TERM) {
    return TOTAL_AMOUNT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TREM) {
    return TOTAL_AMOUNT - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_AMOUNT;
}

module.exports = calculateRentalCost;
