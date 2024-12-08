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

  const price = days * 40;

  if (days >= LONG_TERM) {
    return price - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return price - MEDIUM_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
