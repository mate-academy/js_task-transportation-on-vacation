/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RATE = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  
  if (days >= LONG_TERM) {
    return days * DAILY_RATE - LONG_TERM_DISCOUNT;
  } if (days >= SHORT_TERM) {
    return days * DAILY_RATE - SHORT_TERM_DISCOUNT;
  } 
  return days * DAILY_RATE;
}

module.exports = calculateRentalCost;
