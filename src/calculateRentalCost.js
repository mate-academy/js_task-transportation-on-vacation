/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_COST = 40;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DAYS = 7;
const SHORT_TERM_DAYS = 3;
function calculateRentalCost(days) {
  // write code here
  const cost = days * DAILY_COST;
  if (days >= LONG_TERM_DAYS) {
    return cost - LONG_TERM_DISCOUNT;
  } 
  
  if (days >= SHORT_TERM_DAYS) {
    return cost - SHORT_TERM_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
