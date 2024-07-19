/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_RENT = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const basePrise = days * COST_RENT;

  if (days >= LONG_TERM) {
    return basePrise - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrise - SHORT_TERM_DISCOUNT;
  }

  return basePrise;
}

module.exports = calculateRentalCost;
