/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const BASE_COST = days * 40;
    if (days >= LONG_TERM){
      return BASE_COST - LONG_TERM_DISCOUNT;
    }
    if (days >= SHORT_TERM){
      return BASE_COST - SHORT_TERM_DISCOUNT;
    }

    return BASE_COST;
}

module.exports = calculateRentalCost;
