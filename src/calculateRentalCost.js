/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM_DISCOUNT = 50;
  const NORMAL_TERM_DISCOUNT = 20;
  const RENTAL_COST = 40;
  const LONG_TERM = 7;
  const NORMAL_TERM = 3;
  const TOTAL_COST = days * RENTAL_COST;

  if (days >= LONG_TERM) {
    return TOTAL_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= NORMAL_TERM) {
    return TOTAL_COST - NORMAL_TERM_DISCOUNT;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
