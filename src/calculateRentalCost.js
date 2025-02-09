/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const MIDDLE_TERM = 3;
  const LONG_TERM = 7;
  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const price = days * BASE_PRICE;

  if (days >= LONG_TERM) {
    return price - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return price - MIDDLE_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
