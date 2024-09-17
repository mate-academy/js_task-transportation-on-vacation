/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_REP_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let basePrice = days * PRICE_REP_DAY;
  
  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }
  
  if (days >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;

}

module.exports = calculateRentalCost;
