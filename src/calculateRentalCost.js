/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const RENT_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days < MEDIUM_TERM) {
    return days * RENT_COST;
  }

  if (days >= MEDIUM_TERM && days < LONG_TERM) {
    return days * RENT_COST - MEDIUM_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * RENT_COST - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
