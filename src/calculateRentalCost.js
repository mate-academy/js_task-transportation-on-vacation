/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const PRICE_RENT = 40;

  if (days < SHORT_TERM) {
    return days * PRICE_RENT;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return days * PRICE_RENT - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * PRICE_RENT - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
