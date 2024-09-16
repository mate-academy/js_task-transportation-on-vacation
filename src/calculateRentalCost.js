/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const PRICE_PIER_DAY = 40;

  const startPrice = PRICE_PIER_DAY * days;

  if (days >= LONG_TERM) {
    return startPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return startPrice - SHORT_TERM_DISCOUNT;
  }

  return startPrice;
}

module.exports = calculateRentalCost;
