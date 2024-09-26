/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let price = 40 * days;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    price -= SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    price -= LONG_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
