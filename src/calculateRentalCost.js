/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 30;
  const SHORT_TERM_DISCOUNT = 20;
  const ONE_DAY_PRICE = 40;

  let DAY_PRICE = ONE_DAY_PRICE * days;

  if (days >= LONG_TERM) {
    DAY_PRICE -= LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    DAY_PRICE -= SHORT_TERM_DISCOUNT;
  }

  return DAY_PRICE;
}

module.exports = calculateRentalCost;
