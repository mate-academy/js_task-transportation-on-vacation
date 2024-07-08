/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const MEDIUM_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;
  const RENT_PRICE = 40;

  if (days >= LONG_TERM) {
    return days * RENT_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return days * RENT_PRICE - MEDIUM_TERM_DISCOUNT;
  }

  return days * RENT_PRICE;
}

module.exports = calculateRentalCost;
