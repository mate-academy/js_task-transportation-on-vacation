/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PRICE_PER_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const primaryPrice = days * RENT_PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return primaryPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return primaryPrice - SHORT_TERM_DISCOUNT;
  }

  return primaryPrice;
}

module.exports = calculateRentalCost;
