/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAYLY_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const BASIC_TERMS = 3;
  const BASIC_TERMS_DISCOUNT = 20;
  const total = days * DAYLY_PRICE;

  if (days >= LONG_TERM) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= BASIC_TERMS) {
    return total - BASIC_TERMS_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
