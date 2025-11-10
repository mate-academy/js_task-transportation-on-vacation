/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_COST_PER_DAY = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DAYS = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM_DAYS) {
    return days * BASE_COST_PER_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_DAYS) {
    return days * BASE_COST_PER_DAY - MEDIUM_TERM_DISCOUNT;
  }

  return days * BASE_COST_PER_DAY;
}

module.exports = calculateRentalCost;
