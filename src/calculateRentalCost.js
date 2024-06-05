/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const PRICE_IN_DAY = 40;

  let price = days * PRICE_IN_DAY;

  if (days >= LONG_TERM) {
    price = price - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    price = price - SHORT_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
