/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_A_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  let price = days * PRICE_A_DAY;

  if (days >= LONG_TERM) {
    price = price - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    price = price - SHORT_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
