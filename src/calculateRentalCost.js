/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PRICE = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  let price = days * DAY_PRICE;

  if (days >= LONG_TERM) {
    price = price - LONG_TERM_DISCOUNT;

    return price;
  }

  if (days >= SHORT_TERM) {
    price = price - SHORT_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
