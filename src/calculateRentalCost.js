/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_RENT_PER_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= 7) {
    return days * COST_RENT_PER_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return days * COST_RENT_PER_DAY - SHORT_TERM_DISCOUNT;
  }

  return days * COST_RENT_PER_DAY;
}

module.exports = calculateRentalCost;
