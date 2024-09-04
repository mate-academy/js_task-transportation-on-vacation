/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const ONE_DAY_PRICE = 40;

  const DAY_PRICE = ONE_DAY_PRICE * days;
  let RESULT_PRICE = DAY_PRICE;

  if (days >= LONG_TERM) {
    RESULT_PRICE -= LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    RESULT_PRICE -= SHORT_TERM_DISCOUNT;
  }

  return RESULT_PRICE;
}

module.exports = calculateRentalCost;
