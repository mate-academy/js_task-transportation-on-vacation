/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3
  const LONG_TERM = 3

  if (days < SHORT_TERM) {
    return days * PRICE;
  }

  if (days >= 3 && days < LONG_TERM) {
    return days * PRICE - MIDDLE_TERM_DISCOUNT;
  }

  return days * PRICE - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
