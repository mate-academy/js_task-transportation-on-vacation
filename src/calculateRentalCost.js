/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const SHORT_TERM = 3;
  const baserPice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return baserPice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return baserPice - SHORT_TERM_DISCOUNT;
  }

  return baserPice;
}

module.exports = calculateRentalCost;
