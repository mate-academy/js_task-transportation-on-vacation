/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const STANDART_TERM = 3;
  const STANDART_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const PRICE = 40;
  const BASE_PRICE = PRICE * days;

  if (days < STANDART_TERM) {
    return BASE_PRICE;
  }

  if (days < LONG_TERM) {
    return BASE_PRICE - STANDART_TERM_DISCOUNT;
  }

  return BASE_PRICE - LONG_TERM_DISCOUNT; ;
}

module.exports = calculateRentalCost;
