/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;
  const FULL_COST = days * DAY_COST;

  if (days < MIDDLE_TERM) {
    return FULL_COST;
  }

  if (days >= MIDDLE_TERM && days < LONG_TERM) {
    return FULL_COST - MIDDLE_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return FULL_COST - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
