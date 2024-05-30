/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const RENT_COST = 40;
  const FINAL_COST = RENT_COST * days;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return FINAL_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return FINAL_COST - MEDIUM_TERM_DISCOUNT;
  }

  return FINAL_COST;
}

module.exports = calculateRentalCost;
