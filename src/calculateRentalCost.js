/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
    const DAILY_RATE = 40;
    const LONG_TERM_DISCOUNT = 50;
    const SHORT_TERM_DISCOUNT = 20;
    const SHORT_TERM_MIN_DAYS = 3;
    const LONG_TERM_MIN_DAYS = 7;
  
    let totalCost = days * DAILY_RATE;
    
    if (days >= LONG_TERM_MIN_DAYS) {
        return totalCost - LONG_TERM_DISCOUNT;
    }
    if (days >= SHORT_TERM_MIN_DAYS) {
        return totalCost - SHORT_TERM_DISCOUNT;
    }
  
    return totalCost;
}

module.exports = calculateRentalCost;

