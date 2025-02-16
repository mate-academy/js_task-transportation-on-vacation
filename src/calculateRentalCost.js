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
  const PRICE_PER_DAY = 40;

  const sumForDays = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return sumForDays - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return sumForDays - SHORT_TERM_DISCOUNT;
  }

  return sumForDays;
}

module.exports = calculateRentalCost;
