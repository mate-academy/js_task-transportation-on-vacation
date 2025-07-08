/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const price = COST_PER_DAY * days;
  const LONG_TERM = 7;
  const LOW_TERM = 2;
  const LONG_TERM_DISCOUNT = 50;
  const LOW_TERM_DISCOUNT = 20;

  if (days <= 2) {
    return price;
  }

  if (days >= LONG_TERM) {
    return price - LONG_TERM_DISCOUNT;
  }

  if (days >= LOW_TERM) {
    return price - LOW_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
