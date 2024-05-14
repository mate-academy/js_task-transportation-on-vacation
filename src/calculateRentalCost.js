/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const TERM = 3;
  const LONG_TERM = 7;
  const RENT_COST = 40;
  const TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const SUM_RENT = days * RENT_COST;

  if (days < TERM) {
    return SUM_RENT;
  }

  if (days < LONG_TERM) {
    return SUM_RENT - TERM_DISCOUNT;
  }

  return SUM_RENT - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
