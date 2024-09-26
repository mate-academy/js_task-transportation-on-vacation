/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TERM = 7,
  SHORT_TERM = 3,
  LONG_TERM_DISCOUNT = 50,
  SHORT_TERM_DISCOUNT = 20,
  RENT_PRICE = 40,
  BASE_PRICE = RENT_PRICE * days;
  if (days >= LONG_TERM) {
    return BASE_PRICE - LONG_TERM_DISCOUNT;
  }
  if (days >=   SHORT_TERM && days < LONG_TERM) {
    return  BASE_PRICE - SHORT_TERM_DISCOUNT;
  }
  return BASE_PRICE;
}


module.exports = calculateRentalCost;
