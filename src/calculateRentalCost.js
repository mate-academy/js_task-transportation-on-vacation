/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const BASE_PRICE_PER_DAY = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < 3) {
    return days * BASE_PRICE_PER_DAY;
  } 
   if (days >= SHORT_TERM_DAYS && days < LONG_TERM_DAYS) {
    return days * BASE_PRICE_PER_DAY - SHORT_TERM_DISCOUNT;
  }

  return days * BASE_PRICE_PER_DAY - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
