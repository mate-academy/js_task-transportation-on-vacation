/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_THRESHOLD_DISCOUNT = 50;
  const MID_TERM_THRESHOLD= 3;
  const MID_TERM_DISCOUNT = 20;
  const basePrice = DAILY_RATE * days;


  if (days >= LONG_TERM_THRESHOLD) {
    return basePrice - LONG_TERM_THRESHOLD_DISCOUNT;
  }

  if (days < MID_TERM_THRESHOLD) {
    return basePrice;
  }
  
    return basePrice - MID_TERM_DISCOUNT;

  
}

module.exports = calculateRentalCost;
