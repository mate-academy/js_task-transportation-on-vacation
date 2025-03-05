/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  let price = days * BASE_PRICE;

  if (days >= LONG_TERM) {
    price -= LONG_TERM_DISCOUNT;

    return price;
  } else if (days >= SHORT_TERM) {
    price -= SHORT_TERM_DISCOUNT;

    return price;
  }

  return price;
}

module.exports = calculateRentalCost;
