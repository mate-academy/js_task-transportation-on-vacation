/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM_RENT = 7;
  const SHORT_TERM_RENT = 3;
  const DAILY_RENTAL_COST = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const price = days * DAILY_RENTAL_COST

  if (days >= LONG_TERM_RENT) {
    return price - LONG_TERM_DISCOUNT;
  }
  
 if (days >= SHORT_TERM_RENT) {
    return price - SHORT_TERM_DISCOUNT;
  }
    return price;
}

module.exports = calculateRentalCost;