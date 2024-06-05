/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PAR_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHOTR_LONG_TERM = 3;
  const SHOTR_LONG_TERM_DISCOUNT = 20;

  const basePrice = days * PRICE_PAR_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHOTR_LONG_TERM) {
    return basePrice - SHOTR_LONG_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
