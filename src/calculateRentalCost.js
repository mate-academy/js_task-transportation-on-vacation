/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let price = days * PRICE_PER_DAY;

  if (days >= LONG_TERM_DAYS) {
    price -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM_DAYS) {
    price -= SHORT_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
