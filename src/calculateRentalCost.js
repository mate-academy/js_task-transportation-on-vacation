/**
 * @param {number} days
 *
 * @return {number}
 */
const DAY_PRICE = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
function calculateRentalCost(days) {
  const result = days * DAY_PRICE;
  
  if (days >= LONG_TERM) {
    return result - LONG_TERM_DISCOUNT;
  }
  
  else if (days >= SHORT_TERM) {
    return result - SHORT_TERM_DISCOUNT;
  }
  
  return result;
}

module.exports = calculateRentalCost;
