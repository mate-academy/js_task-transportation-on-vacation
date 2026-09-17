/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  let price = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    price -= LONG_TERM_DISCOUNT;
  } else if (days >= MEDIUM_TERM) {
    price -= MEDIUM_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
