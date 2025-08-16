/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const DAYS_FOR_BASIC_DISCOUNT = 3;
  const LONG_TERM = 7;
  const COST_OF_RENT = 40;
  const BASIC_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const BASE_PRICE = days * COST_OF_RENT;

  if (days >= DAYS_FOR_BASIC_DISCOUNT && days < LONG_TERM) {
    return BASE_PRICE - BASIC_DISCOUNT;
  }

  if (days >= 7) {
    return BASE_PRICE - LONG_TERM_DISCOUNT;
  }

  return BASE_PRICE;
}

module.exports = calculateRentalCost;
