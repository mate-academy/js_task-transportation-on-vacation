/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const priceForDays = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return priceForDays - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return priceForDays - SHORT_TERM_DISCOUNT;
  }

  return priceForDays;
}

module.exports = calculateRentalCost;
