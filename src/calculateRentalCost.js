/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const VERY_SHORT_TERM = 2;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const PRE_SHORT_TERM = 3;
  const SHORT_TERM_DISCAUNT = 20;
  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days <= VERY_SHORT_TERM) {
    return PRICE_PER_DAY * VERY_SHORT_TERM;
  }

  if(days >= PRE_SHORT_TERM && days <= LONG_TERM){
    return basePrice - SHORT_TERM_DISCAUNT
  }

  return basePrice;
}

module.exports = calculateRentalCost;
