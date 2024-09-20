/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_COST_PER_DAY = 40;
  const totalCOst = days * RENTAL_COST_PER_DAY;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return totalCOst - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalCOst - SHORT_TERM_DISCOUNT;
  }

  return totalCOst;
}

module.exports = calculateRentalCost;
