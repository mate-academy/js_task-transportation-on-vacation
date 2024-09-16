/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const PRICE = 40;

  return days >= LONG_TERM
    ? days * PRICE - LONG_TERM_DISCOUNT
    : days >= MEDIUM_TERM
      ? days * PRICE - MEDIUM_TERM_DISCOUNT
      : days * PRICE;
}

module.exports = calculateRentalCost;
