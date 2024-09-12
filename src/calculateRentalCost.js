/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const BASIC_DISCOUNT = 20;

  let result = days * BASE_PRICE;

  if (days >= LONG_TERM) {
    result = result - LONG_TERM_DISCOUNT;
  } else if (days >= 3) {
    result = result - BASIC_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
