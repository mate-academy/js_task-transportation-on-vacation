/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const REGULAR_COST = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const MIDDLE_TERM = 3;
  let price = days * REGULAR_COST;

  if (days >= LONG_TERM) {
    return price - LONG_TERM_DISCOUNT;
  }
  
  if (days >= MIDDLE_TERM) {
    return price - MIDDLE_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
