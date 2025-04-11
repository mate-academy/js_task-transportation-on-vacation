/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const BasePrice = days * pricePerDay;

  if (days >= LONG_TERM) {
    return BasePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return BasePrice - SHORT_TERM_DISCOUNT;
  }

  return BasePrice;
}

module.exports = calculateRentalCost;
