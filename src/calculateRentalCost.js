/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PRICE = 40;
  const SMALL_TERM = 3;
  const SMALL_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const PRICE = days * RENT_PRICE;

  if (days >= LONG_TERM) {
    return PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SMALL_TERM) {
    return PRICE - SMALL_TERM_DISCOUNT;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
