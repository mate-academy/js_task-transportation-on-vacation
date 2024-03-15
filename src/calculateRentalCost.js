/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENT_PRICE = 40;
  const LONG_TERM = 7;
  const BASIC_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const BASIC_TERM_DISCOUNT = 20;
  const price = days * DAY_RENT_PRICE;

  if (days >= LONG_TERM) {
    return price - LONG_TERM_DISCOUNT;
  }

  if (days >= BASIC_TERM) {
    return price - BASIC_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
