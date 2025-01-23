/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PED_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const bazePrice = days * PRICE_PED_DAY;

  if (days >= LONG_TERM) {
    return bazePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return bazePrice - SHORT_TERM_DISCOUNT;
  }

  return bazePrice;
}

module.exports = calculateRentalCost;
