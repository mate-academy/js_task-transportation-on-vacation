/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_DAY_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const totalCost = days * RENT_DAY_COST;

  if (days >= LONG_TERM) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
